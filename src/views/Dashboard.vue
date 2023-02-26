<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
          <stats-card
            title="Tank"
            type="gradient-red"
            sub-title="Warrior"
            classImage="Icon_class_warrior.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Tank"
            type="gradient-orange"
            sub-title="Paladin"
            classImage="Icon_class_paladin.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Tank"
            type="gradient-green"
            sub-title="ShadowKnight"
            classImage="Icon_class_shadowknight.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Caster DPS"
            type="gradient-info"
            sub-title="Magician"
            classImage="Icon_class_magician.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Caster DPS"
            type="gradient-info"
            sub-title="Wizard"
            classImage="Icon_class_wizard.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Caster DPS"
            type="gradient-info"
            sub-title="Necromancer"
            classImage="Icon_class_necromancer.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Healer"
            type="gradient-info"
            sub-title="Cleric"
            classImage="Icon_class_cleric.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Healer"
            type="gradient-info"
            sub-title="Druid"
            classImage="Icon_class_druid.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Support"
            type="gradient-info"
            sub-title="Shaman"
            classImage="Icon_class_shaman.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Support"
            type="gradient-info"
            sub-title="Enchanter"
            classImage="Icon_class_enchanter.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Support"
            type="gradient-info"
            sub-title="Bard"
            classImage="Icon_class_bard.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Melee DPS"
            type="gradient-info"
            sub-title="Beastlord"
            classImage="Icon_class_beastlord.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Melee DPS"
            type="gradient-info"
            sub-title="Berserker"
            classImage="Icon_class_beserker.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Melee DPS"
            type="gradient-info"
            sub-title="Monk"
            classImage="Icon_class_monk.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Melee DPS"
            type="gradient-info"
            sub-title="Rogue"
            classImage="Icon_class_rogue.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Hybrid"
            type="gradient-info"
            sub-title="Ranger"
            classImage="Icon_class_ranger.gif"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-nowrap">Gear Profiles: 0</span>
            </template>
          </stats-card>
        </b-col>
      </b-row>
    </base-header>
  </div>
</template>

<script>
// Charts
import * as chartConfigs from "@/components/Charts/config";
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";

// Components
import BaseProgress from "@/components/BaseProgress";
import StatsCard from "@/components/Cards/StatsCard";

// Tables
import SocialTrafficTable from "./Dashboard/SocialTrafficTable";
import PageVisitsTable from "./Dashboard/PageVisitsTable";

export default {
  components: {
    LineChart,
    BarChart,
    BaseProgress,
    StatsCard,
    PageVisitsTable,
    SocialTrafficTable,
  },
  data() {
    return {
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40],
        ],
        activeIndex: 0,
        chartData: {
          datasets: [
            {
              label: "Performance",
              data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
            },
          ],
          labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
      redBarChart: {
        chartData: {
          labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Sales",
              data: [25, 20, 30, 22, 17, 29],
            },
          ],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
    };
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            label: "Performance",
            data: this.bigLineChart.allData[index],
          },
        ],
        labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    },
  },
  mounted() {
    this.initBigChart(0);
  },
};
</script>

<style>
.el-table .cell {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
