<!-- Not Working, will revisit -->
<script>
  import FusionCharts from "fusioncharts";
  import Charts from "fusioncharts/fusioncharts.charts";
  import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
  import SvelteFC, { fcRoot } from "svelte-fusioncharts";

  // Always set FusionCharts as the first parameter
  fcRoot(FusionCharts, Charts, FusionTheme);

  const dataSource = {
    chart: {
      caption: "States with Highest Poverty (>17%) in USA",
      subcaption: "For the year 2016",
      numbersuffix: "%",
      theme: "fusion",
      tooltipbgcolor: "#FFFFFF",
      tooltipbordercolor: "#CCCCCC",
      showentitytooltip: "0",
      showentityhovereffect: "0",
      showlabels: "0",
      entitytooltext:
        "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Poverty Rate: <b>$value%</b></div>",
      entityfillhovercolor: "#FFF9C4",
      nullentitycolor: "#ECE9D3",
    },
    colorrange: {
      minvalue: "17.5",
      code: "#EAD95F",
      gradient: "1",
      color: [
        {
          maxvalue: "20",
          code: "#EE8D50",
        },
        {
          maxvalue: "22.5",
          code: "#F24141",
        },
      ],
    },
    data: [
      {
        id: "DC",
        value: "17.9",
        showtooltip: "1",
        showlabel: "1",
        alpha: "100",
        fontbold: "1",
      },
      {
        id: "AZ",
        value: "17.7",
        showlabel: "1",
        alpha: "100",
        fontbold: "1",
        usehovercolor: "1",
        showtooltip: "1",
      },
      {
        id: "NM",
        value: "20.9",
        showtooltip: "1",
        showlabel: "1",
        alpha: "100",
        fontbold: "1",
        usehovercolor: "1",
      },
      {
        id: "AR",
        value: "18.8",
        showtooltip: "1",
        showlabel: "1",
        alpha: "100",
        fontbold: "1",
        usehovercolor: "1",
      },
      {
        id: "LA",
        value: "19.7",
        showtooltip: "1",
        showlabel: "1",
        alpha: "100",
        fontbold: "1",
        usehovercolor: "1",
      },
      {
        id: "KY",
        value: "18.8",
        showtooltip: "1",
        showlabel: "1",
        alpha: "100",
        fontbold: "1",
        usehovercolor: "1",
      },
      {
        id: "MS",
        value: "22.3",
        showtooltip: "1",
        showlabel: "1",
        alpha: "100",
        fontbold: "1",
        usehovercolor: "1",
      },
      {
        id: "AL",
        value: "18.4",
        showtooltip: "1",
        showlabel: "1",
        alpha: "100",
        fontbold: "1",
        usehovercolor: "1",
      },
      {
        id: "GA",
        value: "17.8",
        showtooltip: "1",
        showlabel: "1",
        alpha: "100",
        fontbold: "1",
        usehovercolor: "1",
      },
      {
        id: "WV",
        value: "17.8",
        showtooltip: "1",
        showlabel: "1",
        alpha: "100",
        fontbold: "1",
        usehovercolor: "1",
      },
    ],
  };

  const chartConfigs = {
    type: "usa",
    width: 600,
    height: 400,
    dataFormat: "json",
    dataSource,
  };
</script>

<SvelteFC {...chartConfigs} />
