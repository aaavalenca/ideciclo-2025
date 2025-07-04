import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { City, Segment } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import EvaluationTableSortableWrapper from "@/components/EvaluationTableSortableWrapper";
import { fetchUniqueStatesFromDB, fetchCitiesByState, fetchSegmentsByCity } from "@/services/database";

const Avaliacao = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCityId, setSelectedCityId] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [segments, setSegments] = useState<Segment[]>([]);
  const [states, setStates] = useState<{ id: string; name: string }[]>([]);
  const [selectedState, setSelectedState] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isCityCardVisible, setIsCityCardVisible] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  // Load saved state and city on initial render
  useEffect(() => {
    const savedState = sessionStorage.getItem("selectedState");
    const savedCityId = sessionStorage.getItem("selectedCityId");
    
    if (savedState) {
      setSelectedState(savedState);
    }
    
    if (savedCityId) {
      setSelectedCityId(savedCityId);
    }
  }, []);

  // Fetch states from DB
  useEffect(() => {
    const fetchStates = async () => {
      const uniqueStates = await fetchUniqueStatesFromDB();
      setStates(uniqueStates);
    };

    fetchStates();
  }, []);

  // Fetch cities when state is selected
  useEffect(() => {
    if (selectedState) {
      const fetchCities = async () => {
        setIsLoading(true);
        try {
          const data = await fetchCitiesByState(selectedState);
          
          if (data.length === 0) {
            setError("Nenhuma cidade encontrada para este estado");
            return;
          }

          setCities(data);
          
          // If we have a saved city ID, load its segments after cities are loaded
          const savedCityId = sessionStorage.getItem("selectedCityId");
          if (savedCityId) {
            const city = data.find((c) => c.id === savedCityId);
            if (city) {
              setSelectedCity(city);
              fetchSegmentsForCity(savedCityId);
            }
          }
        } catch (error) {
          console.error("Error fetching cities:", error);
          setError("Erro ao carregar cidades");
        } finally {
          setIsLoading(false);
        }
      };

      fetchCities();
    }
  }, [selectedState]);

  const handleStateChange = (value: string) => {
    setSelectedState(value);
    setSelectedCityId("");
    setSelectedCity(null);
    setSegments([]);
    
    // Save to sessionStorage
    sessionStorage.setItem("selectedState", value);
    sessionStorage.removeItem("selectedCityId");
  };

  const handleCityChange = (value: string) => {
    setSelectedCityId(value);
    const city = cities.find((c) => c.id === value) || null;
    setSelectedCity(city);

    // Save to sessionStorage
    sessionStorage.setItem("selectedCityId", value);
    
    if (value) {
      fetchSegmentsForCity(value);
    } else {
      setSegments([]);
    }
  };

  const fetchSegmentsForCity = async (cityId: string) => {
    setIsLoading(true);
    try {
      const data = await fetchSegmentsByCity(cityId);
      setSegments(data);
    } catch (error) {
      console.error("Error fetching segments:", error);
      setError("Erro ao carregar segmentos");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToStart = () => {
    navigate("/");
  };

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Avaliação de Infraestrutura Cicloviária
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleBackToStart}>
            Voltar ao Início
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card className="mb-6">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Selecionar Cidade</CardTitle>
              <CardDescription>
                Escolha o estado e a cidade para visualizar os segmentos
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCityCardVisible(!isCityCardVisible)}
            >
              {isCityCardVisible ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>
        </CardHeader>
        {isCityCardVisible && (
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="state">Estado</Label>
                <Select value={selectedState} onValueChange={handleStateChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um estado" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state.id} value={state.id}>
                        {state.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <Select
                  value={selectedCityId}
                  onValueChange={handleCityChange}
                  disabled={!selectedState || cities.length === 0}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma cidade" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.id} value={city.id}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <p>Carregando dados... Por favor aguarde.</p>
          </div>
        </div>
      )}

      {!isLoading && selectedCity && segments.length > 0 && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>
                    {selectedCity.name}, {selectedCity.state}
                  </CardTitle>
                  <CardDescription>
                    Segmentos disponíveis para avaliação
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <EvaluationTableSortableWrapper
                segments={segments}
                showSortOptions={true}
              />
            </CardContent>
          </Card>
        </div>
      )}

      {!isLoading && selectedCity && segments.length === 0 && (
        <Alert>
          <AlertTitle>Nenhum segmento encontrado</AlertTitle>
          <AlertDescription>
            Não foram encontrados segmentos para esta cidade.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Avaliacao;
