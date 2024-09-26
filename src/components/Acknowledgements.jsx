// Acknowledgements.js
import { Acknowledgment } from './Acknowledgment';

const acknowledgmentsList = [
  {
    text: 'Mention in the Barretos Journal',
    href: 'https://jornaldebarretos.com.br/artigos/transformando-a-panificadora-37-para-a-era-digital-um-sucesso-colaborativo/',
  },
  // Add more acknowledgments here
];

export function Acknowledgements() {
    return (
      <div className="flex-1 bg-white p-8 rounded-lg shadow-lg flex flex-col">
        <h2 className="text-3xl font-semibold text-zinc-800 mb-6">Mentions & Publications</h2>
        <p className="text-zinc-600 leading-relaxed">
          Here are some notable mentions and publications featuring my work:
        </p>
        {/* Scrollable List on Desktop */}
        <div className="flex-1 mt-4 lg:overflow-y-auto">
          <ul className="list-disc list-inside space-y-2">
            {acknowledgmentsList.map((ack, index) => (
              <Acknowledgment key={index} href={ack.href}>
                {ack.text}
              </Acknowledgment>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-zinc-600 italic">
          I am grateful for these opportunities to share my passion and expertise with a wider audience.
        </p>
      </div>
    );
  }
