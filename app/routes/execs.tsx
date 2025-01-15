import { Link } from '@remix-run/react';
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from 'recharts';

import { ChartTooltip } from '@/components/ui/chart';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const EXECUTIVE_DATA = [
  {
    year: '2012-13',
    president: 'Gaelan Adams',
    vicePresident: 'Kirk Elifson',
    treasurer: 'Ditmar Wendt',
    secretary: 'Brandon Catubig',
  },
  {
    year: '2013-14',
    president: 'Jonathan Singer / Carlos Beltran',
    vicePresident: 'Carlos Beltran / Alex Davis',
    treasurer: 'Troy Micka',
    secretary: 'Austin Brogle',
  },
  {
    year: '2014-15',
    president: 'Cody McMahon',
    vicePresident: 'Joe Pate',
    treasurer: 'Dale Driggs / Troy Micka',
    secretary: 'Mark Ignacio',
  },
  {
    year: '2015-16',
    president: 'Mark Ignacio',
    vicePresident: 'Shane Welsh',
    treasurer: 'Jacob Hazelbaker',
    secretary: 'Heather Lawrence',
  },
  {
    year: '2016-17',
    president: 'Heather Lawrence',
    vicePresident: 'Tyler Lukasiewicz',
    treasurer: 'Nathan Dolorfino',
    secretary: 'Matthew St. Hubin',
  },
  {
    year: '2017-18',
    president: 'Kevin Colley',
    vicePresident: 'Matthew St. Hubin',
    treasurer: 'Emil Dolorfino',
    secretary: 'David Maria',
  },
  {
    year: '2018-19',
    president: 'David Maria',
    vicePresident: 'Charlton Trezevant',
    treasurer: 'Nathan Dolorfino',
    secretary: 'Lauryn Landkrohn',
  },
  {
    year: '2019-20',
    president: 'Charlton Trezevant',
    vicePresident: 'Peyton Duncan',
    treasurer: 'Alexander Cote',
    secretary: 'James Simmons',
  },
  {
    year: '2020-21',
    president: 'Michael Troisi',
    vicePresident: 'Ryan Carnovsky',
    treasurer: 'Addison Cobble',
    secretary: 'Marisa Kosto Burns / Jeffrey DiVincent',
  },
  {
    year: '2021-22',
    president: 'Daniel Trimble',
    vicePresident: 'Jeffrey DiVincent',
    treasurer: 'Matthew McKeever',
    secretary: 'Jake DiClemente',
  },
  {
    year: '2022-23',
    president: 'Jeffrey DiVincent',
    vicePresident: 'Addison Cobble',
    treasurer: 'Caleb Sjostedt',
    secretary: 'Colton Knight',
  },
  {
    year: '2023-24',
    president: 'Jackson Shaw',
    vicePresident: 'Victor Suarez',
    treasurer: 'Caleb Sjostedt',
    secretary: 'Joshua Walsworth',
  },
  {
    year: '2024-25',
    president: 'Kevin Kiderchah',
    vicePresident: 'Adit Rajkumar',
    treasurer: 'Jonathan Styles',
    secretary: 'John Vezzola',
  },
];

const positions = ['president', 'vicePresident', 'treasurer', 'secretary'];

export default function Executives() {
  const chartData = EXECUTIVE_DATA.map(year => ({
    name: year.year,
    value: 0.5,
  }));

  return (
    <main className="min-h-screen p-8 bg-background text-foreground pt-28">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-16 mt-8">
          <h1 className="text-5xl font-bold">Hack@UCF Executives</h1>
          <Link
            to="/about-us"
            className="text-center border-2 bg-background hover:bg-brandGold text-lg hover:text-background border-brandGold text-brandGold rounded-full w-full mt-16 py-1"
          >
            Back to About Us
          </Link>
        </div>

        <Card className="w-full mb-16 border border-brandGold/20">
          <CardHeader className="space-y-4">
            <CardTitle className="text-3xl font-semibold text-center">
              Leadership Evolution at Hack@UCF
            </CardTitle>
            <CardDescription className="text-lg text-center text-white">
              Tracking executive positions over the years
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full p-8 bg-background rounded-lg">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 10, right: 30, left: 30, bottom: 20 }}
                >
                  <XAxis
                    dataKey="name"
                    type="category"
                    tick={{ fill: '#D2990B', fontSize: 14 }}
                    height={80}
                  />
                  <YAxis type="number" domain={[0, 1]} hide />
                  <ChartTooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const yearData = EXECUTIVE_DATA.find(
                          d => d.year === payload[0].payload.name,
                        );
                        if (yearData) {
                          return (
                            <div className="bg-background border border-brandGold p-4 rounded-lg shadow-lg">
                              <p className="font-bold text-brandGold mb-2">
                                {yearData.year}
                              </p>
                              <div className="space-y-1">
                                <p className="text-foreground">
                                  President: {yearData.president}
                                </p>
                                <p className="text-foreground">
                                  Vice President: {yearData.vicePresident}
                                </p>
                                <p className="text-foreground">
                                  Treasurer: {yearData.treasurer}
                                </p>
                                <p className="text-foreground">
                                  Secretary: {yearData.secretary}
                                </p>
                              </div>
                            </div>
                          );
                        }
                      }
                      return null;
                    }}
                  />
                  {positions.map(position => (
                    <Line
                      key={position}
                      dataKey="value"
                      stroke="#D2990B"
                      strokeWidth={2}
                      dot={{ r: 4, fill: '#D2990B' }}
                      activeDot={{ r: 6, fill: '#D2990B' }}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <section>
          <div className="overflow-x-auto rounded-lg border border-brandGold/20">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brandGold bg-opacity-10">
                  <th className="p-4 text-left text-brandGold font-semibold">
                    Year
                  </th>
                  <th className="p-4 text-left text-brandGold font-semibold">
                    President
                  </th>
                  <th className="p-4 text-left text-brandGold font-semibold">
                    Vice President
                  </th>
                  <th className="p-4 text-left text-brandGold font-semibold">
                    Treasurer
                  </th>
                  <th className="p-4 text-left text-brandGold font-semibold">
                    Secretary
                  </th>
                </tr>
              </thead>
              <tbody>
                {EXECUTIVE_DATA.map((year, index) => (
                  <tr
                    key={year.year}
                    className={`
                      border-t border-brandGold/10
                      ${index % 2 === 0 ? 'bg-background' : 'bg-brandGold bg-opacity-5'}
                    `}
                  >
                    <td className="p-4 text-foreground">{year.year}</td>
                    <td className="p-4 text-foreground">{year.president}</td>
                    <td className="p-4 text-foreground">
                      {year.vicePresident}
                    </td>
                    <td className="p-4 text-foreground">{year.treasurer}</td>
                    <td className="p-4 text-foreground">{year.secretary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
