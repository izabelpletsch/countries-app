import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";
import { Population } from "../model/Population";

type widgetProps = {
    populationData: Array<Population>;
};

export function PopulationWidget({ populationData }: widgetProps) {
    return (
        <div className="flex overflow-x-auto flex-col bg-white p-4 rounded-md">
            <h2>Population</h2>

            <div className="lg:overflow-x-auto">
                <LineChart
                    width={1000}
                    height={300}
                    data={populationData}
                    margin={{ top: 5, right: 20, bottom: 5, left: 20 }}
                >
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
}
