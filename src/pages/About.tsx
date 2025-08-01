import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

const About = () => {
  const [parametersDialogOpen, setParametersDialogOpen] = useState(false);

  return (
    <>
      <div className="container py-8">
        <h2 className="text-2xl font-bold mb-6">Sobre o IDECICLO</h2>

        <div className="mb-8 text-gray-700">
          <p className="mb-4">
            O IDECICLO – Índice de Desenvolvimento Cicloviário é uma metodologia
            de avaliação qualitativa da infraestrutura cicloviária de uma
            cidade, que considera não apenas a extensão das ciclovias e
            ciclofaixas, mas também a segurança, qualidade e o contexto viário
            em que estão inseridas.
          </p>
          <p className="mb-4">
            Criado inicialmente em 2016 pela Associação Metropolitana de
            Ciclistas do Recife (Ameciclo), o IDECICLO já foi aplicado em mais
            de 34 cidades e áreas brasileiras.
          </p>
          <p className="mb-4">
            A metodologia foi desenvolvida por uma equipe multidisciplinar de
            urbanistas, ciclistas e cicloativistas, com o objetivo de fornecer
            indicadores objetivos sobre a qualidade das infraestruturas
            cicloviárias, permitindo avaliações consistentes, comparáveis e
            replicáveis em diferentes contextos urbanos, em todo o Brasil.
          </p>
          <p className="mb-4">
            Em 2024, a metodologia passou por uma atualização colaborativa
            contando com especialistas e representantes de organizações não
            governamentais. O objetivo foi consolidar indicadores que reflitam a
            realidade de diferentes cidades, alinhados com o Código de Trânsito
            Brasileiro (CTB), a experiência real de ciclistas e tendo como
            referência o manual de auditoria cicloviária, elaborado pela
            Ciclocidade – Associação dos Ciclistas Urbanos de São Paulo.
          </p>
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="mt-4">
              <Card>
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <h3 className="text-xl font-semibold text-left">
                    Por que o IDECICLO é diferente?
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pt-2 pb-4">
                    <p className="mb-4">
                      O grande diferencial do IDECICLO é sua capacidade de
                      ponderar a avaliação da infraestrutura cicloviária de
                      acordo com a velocidade máxima permitida nas vias onde
                      elas estão inseridas. Isso significa que a metodologia dá
                      maior peso às estruturas localizadas em vias de alta
                      velocidade, onde a proteção ao ciclista é mais urgente e
                      necessária.
                    </p>
                    <p className="mb-4">
                      Assim, o IDECICLO não mede apenas quantos quilômetros de
                      ciclovias uma cidade tem, mas também onde elas estão e o
                      quanto oferecem segurança diante do risco que a alta
                      velocidade do trânsito motorizado representa.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="item-2" className="mt-4">
              <Card>
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <h3 className="text-xl font-semibold text-left">
                    Para quem é o IDECICLO?
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pt-2 pb-4">
                    <p className="mb-4">
                      A metodologia do IDECICLO pode ser utilizada por diversos
                      públicos interessados em promover a mobilidade por
                      bicicleta com base em dados e evidências, entre eles,
                      indicamos a:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="mb-2">
                        Gestores e gestoras públicas das áreas de mobilidade
                        urbana, planejamento urbano e infraestrutura, que buscam
                        ferramentas técnicas para avaliar, planejar e justificar
                        melhorias na malha cicloviária;
                      </li>
                      <li className="mb-2">
                        Técnicos e planejadores urbanos, que desejam incorporar
                        indicadores de qualidade cicloviária em planos, projetos
                        e diagnósticos urbanos;
                      </li>
                      <li className="mb-2">
                        Organizações cicloativistas da sociedade civil e
                        coletivos de mobilidade ativa que atuam na incidência da
                        promoção do uso da bicicleta e cidades mais seguras e
                        sustentáveis;
                      </li>
                      <li className="mb-2">
                        Pesquisadores, estudantes e universidades, interessados
                        em estudos sobre mobilidade urbana, segurança viária e
                        direito à cidade;
                      </li>
                      <li className="mb-2">
                        Ciclistas urbanos e conselhos de mobilidade, que buscam
                        evidenciar as condições reais de circulação e
                        infraestrutura para dialogar com o poder público de
                        forma qualificada.
                      </li>
                    </ul>
                    <p className="mb-4">
                      O IDECICLO é uma ferramenta aberta e replicável, pensada
                      para fortalecer, por meio de evidências, o planejamento
                      participativo, promover diagnósticos colaborativos e
                      construir pontes entre a sociedade civil e o poder público
                      na promoção de cidades mais seguras e humanas para quem
                      pedala.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="item-3" className="mt-4">
              <Card>
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <h3 className="text-xl font-semibold text-left">
                    Como funciona?
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pt-2 pb-4">
                    <div className="mb-4">
                      <p className="mb-2">
                        São avaliados 23 parâmetros, separados em 5 eixos:
                        planejamento cicloviário, projeto cicloviário ao longo
                        da quadra, projeto cicloviário nas interseções,
                        urbanidade e manutenção da infraestrutura cicloviária.
                      </p>
                      <Button
                        onClick={() => setParametersDialogOpen(true)}
                        variant="outline"
                      >
                        Saiba mais
                      </Button>
                    </div>

                    <h4 className="text-lg font-medium mt-6 mb-3">
                      A. PLANEJAMENTO CICLOVIÁRIO
                    </h4>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="mb-1">
                        A.1. Adequação da tipologia de tratamento em relação à
                        velocidade da via e sua respectiva hierarquia
                      </li>
                      <li className="mb-1">
                        A.2. Conectividade da Rede Cicloviária
                      </li>
                    </ul>

                    <h4 className="text-lg font-medium mt-6 mb-3">
                      B. PROJETO CICLOVIÁRIO AO LONGO DA QUADRA
                    </h4>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="mb-1">
                        B.1. Espaço útil da Infraestrutura Cicloviária
                      </li>
                      <li className="mb-1">B.2. Tipo de Pavimento</li>
                      <li className="mb-1">
                        B.3. Delimitação da Infraestrutura Cicloviária
                      </li>
                      <li className="mb-1">
                        B.4. Identificação do espaço cicloviário
                      </li>
                      <li className="mb-1">
                        B.5. Acessibilidade relativa ao uso do solo lindeiro
                      </li>
                      <li className="mb-1">
                        B.6. Medidas de moderação no compartilhamento viário
                      </li>
                      <li className="mb-1">
                        B.x.1. Conflitos com pontos de ônibus ou escolas
                      </li>
                      <li className="mb-1">
                        B.x.2. Existência de obstáculos horizontais no trecho
                      </li>
                      <li className="mb-1">
                        B.x.3. Existência de obstáculos verticais no trecho
                      </li>
                      <li className="mb-1">
                        B.x.4. Mudança de lado da infraestrutura no meio da
                        quadra
                      </li>
                      <li className="mb-1">
                        B.x.5. Sentido de circulação da infraestrutura contrário
                        ao fluxo veicular
                      </li>
                    </ul>

                    <h4 className="text-lg font-medium mt-6 mb-3">
                      C. PROJETO CICLOVIÁRIO NAS INTERSEÇÕES
                    </h4>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="mb-1">
                        C.1. Sinalização horizontal cicloviária na(s)
                        interseção(ões)
                      </li>
                      <li className="mb-1">
                        C.2. Acessibilidade entre conexões cicloviárias
                      </li>
                      <li className="mb-1">
                        C.3. Tratamento dos conflitos com a circulação de modos
                        motorizados
                      </li>
                    </ul>

                    <h4 className="text-lg font-medium mt-6 mb-3">
                      D. URBANIDADE
                    </h4>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="mb-1">D.1. Iluminação Pública</li>
                      <li className="mb-1">D.2. Conforto térmico</li>
                      <li className="mb-1">
                        D.3. Existência de mobiliário cicloviário
                      </li>
                    </ul>

                    <h4 className="text-lg font-medium mt-6 mb-3">
                      E. MANUTENÇÃO DA INFRAESTRUTURA CICLOVIÁRIA
                    </h4>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="mb-1">
                        E.1. Estado de conservação do pavimento
                      </li>
                      <li className="mb-1">
                        E.2. Estado de conservação dos elementos de delimitação
                        da infraestrutura
                      </li>
                      <li className="mb-1">
                        E.3. Estado de conservação da identificação do espaço
                        cicloviário
                      </li>
                      <li className="mb-1">
                        E.4. Estado de conservação da sinalização horizontal nas
                        interseções
                      </li>
                    </ul>

                    <p className="mt-6 mb-4">
                      A avaliação deve ser feita em campo, por meio de um
                      formulário impresso ou diretamente na plataforma digital,
                      com dispositivo móvel.
                    </p>
                    <p className="mb-4">
                      As notas são obtidas por meio de uma média ponderada, que
                      considera o peso relativo de cada parâmetro e da
                      velocidade da via, garantindo que a avaliação reflita a
                      prioridade real de proteção aos ciclistas.
                    </p>
                    <p className="mb-4">
                      Para compreender melhor a metodologia, os indicadores e o
                      cálculo da nota, acesse o manual.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="item-4" className="mt-4">
              <Card>
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <h3 className="text-xl font-semibold text-left">
                    Como aplicar?
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pt-2 pb-4">
                    <p className="mb-4">
                      Após a leitura do manual, os pesquisadores devem iniciar a
                      coleta pré-campo, organizar as equipes e realizar a
                      avaliação em campo, finalizando com o envio dos dados pela
                      plataforma. A coleta pode ser realizada da forma que for
                      mais conveniente: utilizando o formulário impresso, com
                      posterior transferência e revisão das informações no
                      formulário digital, ou diretamente pela plataforma
                      digital, redobrando a atenção durante o preenchimento.
                    </p>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="item-5" className="mt-4">
              <Card>
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <h3 className="text-xl font-semibold text-left">E depois?</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="pt-2 pb-4">
                    <p className="mb-4">
                      A plataforma irá calcular a nota da cidade, que pode ser
                      visualizada no ranking nacional.
                    </p>

                    <h4 className="text-lg font-medium mt-6 mb-3">
                      Como os resultados podem ser utilizados:
                    </h4>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="mb-3">
                        <span className="font-medium">
                          Organizações cicloativistas da sociedade civil
                        </span>{" "}
                        podem levar os resultados aos gestores públicos locais,
                        utilizando os dados para promover o uso da bicicleta,
                        reivindicar melhorias na infraestrutura existente e
                        avaliar a adequação de novos projetos ao contexto viário
                        da cidade.
                      </li>
                      <li className="mb-3">
                        <span className="font-medium">
                          Gestores e gestoras públicas
                        </span>{" "}
                        são incentivados a serem receptivos às reivindicações
                        das organizações e coletivos que aplicaram o IDECICLO em
                        seu território, reconhecendo a importância desses dados
                        para fundamentar políticas públicas eficazes. Além
                        disso, podem tomar a iniciativa de aplicar o IDECICLO
                        para monitorar e aprimorar continuamente a malha
                        cicloviária, garantindo cidades mais seguras e
                        sustentáveis.
                      </li>
                      <li className="mb-3">
                        <span className="font-medium">
                          Técnicos e planejadores urbanos
                        </span>{" "}
                        têm a oportunidade de usar a nota e o manual como
                        referência para incorporar indicadores de qualidade e
                        segurança cicloviária em planos, projetos e diagnósticos
                        urbanos, contribuindo para seu aperfeiçoamento
                        profissional e mantendo-se atualizados com as melhores
                        práticas e ferramentas inovadoras na área.
                      </li>
                      <li className="mb-3">
                        <span className="font-medium">
                          Pesquisadores, estudantes e universidades
                        </span>{" "}
                        podem utilizar as notas e a metodologia de forma
                        transversal em estudos sobre mobilidade urbana,
                        segurança viária e direito à cidade, contribuindo
                        cientificamente para o desenvolvimento do conhecimento e
                        das políticas públicas baseadas em evidências.
                      </li>
                      <li className="mb-3">
                        <span className="font-medium">
                          Ciclistas urbanos e conselhos de mobilidade
                        </span>{" "}
                        podem usar as notas para evidenciar as condições reais
                        de circulação e infraestrutura, contribuindo para o
                        fortalecimento da sociedade civil na observância das
                        políticas públicas e colaborando com a atualização
                        contínua dos dados da sua cidade, qualificando o diálogo
                        com o poder público e contribuindo para melhorias.
                      </li>
                    </ul>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Dialog
        open={parametersDialogOpen}
        onOpenChange={setParametersDialogOpen}
      >
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              23 Parâmetros de Avaliação
            </DialogTitle>
            <DialogDescription>
              Detalhamento dos parâmetros utilizados na metodologia IDECICLO
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                A. PLANEJAMENTO CICLOVIÁRIO
              </h3>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    A.1. Adequação da tipologia de tratamento
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris. Vivamus hendrerit arcu sed erat
                    molestie vehicula.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    A.2. Conectividade da Rede Cicloviária
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris. Vivamus hendrerit arcu sed erat
                    molestie vehicula.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                B. PROJETO CICLOVIÁRIO AO LONGO DA QUADRA
              </h3>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    B.1. Espaço útil da Infraestrutura Cicloviária
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">B.2. Tipo de Pavimento</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    B.3. Delimitação da Infraestrutura Cicloviária
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    B.4. Identificação do espaço cicloviário
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    B.5. Acessibilidade relativa ao uso do solo lindeiro
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    B.6. Medidas de moderação no compartilhamento viário
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    B.x.1. Conflitos com pontos de ônibus ou escolas
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    B.x.2. Existência de obstáculos horizontais no trecho
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    B.x.3. Existência de obstáculos verticais no trecho
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    B.x.4. Mudança de lado da infraestrutura no meio da quadra
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    B.x.5. Sentido de circulação da infraestrutura contrário ao
                    fluxo veicular
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                C. PROJETO CICLOVIÁRIO NAS INTERSEÇÕES
              </h3>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    C.1. Sinalização horizontal cicloviária na(s)
                    interseção(ões)
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    C.2. Acessibilidade entre conexões cicloviárias
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    C.3. Tratamento dos conflitos com a circulação de modos
                    motorizados
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">D. URBANIDADE</h3>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">D.1. Iluminação Pública</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">D.2. Conforto térmico</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    D.3. Existência de mobiliário cicloviário
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                E. MANUTENÇÃO DA INFRAESTRUTURA CICLOVIÁRIA
              </h3>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    E.1. Estado de conservação do pavimento
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    E.2. Estado de conservação dos elementos de delimitação da
                    infraestrutura
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    E.3. Estado de conservação da identificação do espaço
                    cicloviário
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
                <div className="border rounded-md p-4">
                  <h4 className="font-medium">
                    E.4. Estado de conservação da sinalização horizontal nas
                    interseções
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <DialogClose asChild>
              <Button>Fechar</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default About;
