import axios from "axios";

export interface IStatsRes {
  nodes: number;
  farms: number;
  countries: number;
  totalCru: number;
  totalSru: number;
  totalMru: number;
  totalHru: number;
  publicIps: number;
  accessNodes: number;
  gateways: number;
  twins: number;
  contracts: number;
  nodesDistribution: { [country: string]: number };
}

function merge(...objs: Object[]) {
  const keys = new Set(objs.map((obj) => Object.keys(obj)).flat());
  const [x, y, z] = objs;

  return Array.from(keys).reduce((res, key) => {
    res[key] = (x[key] || 0) + (y[key] || 0) + (z[key] || 0);
    return res;
  }, {} as { [key: string]: number });
}

export async function fetchData() {
  // prettier-ignore
  const [{ data: dev }, { data: test }, { data: main }] = await Promise.all([
    axios.get<IStatsRes>("https://gridproxy.dev.grid.tf/stats?status=up"),
    axios.get<IStatsRes>("https://gridproxy.test.grid.tf/stats?status=up"),
    axios.get<IStatsRes>("https://gridproxy.grid.tf/stats?status=up"),
  ]);

  return {
    ...merge(dev, test, main),
    nodesDistribution: merge(
      dev.nodesDistribution,
      test.nodesDistribution || {},
      main.nodesDistribution || {}
    ),
  } as IStatsRes;
}
