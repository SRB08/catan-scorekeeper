<template>
  <h1>Board Game Keeper</h1>
  <DxTextBox v-model:value="pn" placeholder="enter player name" />
  <!-- <DxButton text="add player" @click="addPlayer" /> -->

  <table class="table-auto w-full border border-gray-400 border-collapse">
    <thead class="bg-gray-200">
      <tr>
        <th class="border border-gray-400 px-4 py-2">name</th>
        <th class="border border-gray-400 px-4 py-2">matches</th>
        <th class="border border-gray-400 px-4 py-2">wins</th>
        <th class="border border-gray-400 px-4 py-2">longest roads</th>
        <th class="border border-gray-400 px-4 py-2">largest armies</th>
        <th class="border border-gray-400 px-4 py-2">rating</th>
      </tr>
    </thead>

    <tbody class="w-full" v-for="(player, index) in players" :key="player.name">
      <tr>
        <td class="border border-gray-400 px-4 py-2">
          {{ player.name }} <DxButton text="edit" />
        </td>
        <td class="border border-gray-400 px-4 py-2">
          {{ player.matches }}
          <button onclick="increaseMatches(index)">add</button>
          <!-- <DxButton @click="increaseMatches(index)" text="+"/> -->
          <!-- <DxButton @click="decreaseMatches(index)" text="-"/> -->
        </td>
        <td class="border border-gray-400 px-4 py-2">
          {{ player.longestR }}
          <!-- <DxButton text="+"/> -->
          <!-- <DxButton text="-"/> -->
        </td>
        <td class="border border-gray-400 px-4 py-2">
          {{ player.largestA }}
          <!-- <DxButton text="+"/> -->
          <!-- <DxButton text="-"/> -->
        </td>

        <td class="border border-gray-400 px-4 py-2">{{ wins * 3 }}</td>
        <td class="border border-gray-400 px-4 py-2">{{ wins * 3 }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import "devextreme-vue/button";
// import DxButton from 'devextreme-vue/button';
import DxTextBox from "devextreme-vue/text-box";
import { ref, onMounted, watch } from "vue";

// refs
const mtc = ref<number>(0);
const wins = ref<number>(0);
const lr = ref<number>(0);
const la = ref<number>(0);
const ratio = ref<number>(0);

const pn = ref<string>("");
const np = ref<boolean>(false);

const players = ref([
  { name: "Sourabh", matches: 4, wins: 2, longestR: 1, largestA: 3 },
]);

onMounted(() => {
  const saved = localStorage.getItem("players");
  if (saved) {
    try {
      players.value = JSON.parse(saved);
    } catch (error) {
      alert(error);
    }
  }
});

watch(
  players,
  (newPlayers, oldPlayers) => {
    localStorage.setItem("players", JSON.stringify(newPlayers));
  },
  { deep: true }
);
// functions

function addPlayer() {
  if (pn.value.trim() === "") {
    return;
  }

  players.value.push({
    name: pn.value,
    matches: 0,
    wins: 0,
    longestR: 0,
    largestA: 0,
  });

  pn.value = "";
  console.log(players.value);
}
function increaseMatches(index: number) {
  players.value[index].matches++;
  console.log(players.value);
}

function decreaseMatches(index: number) {
  if (players.value[index].matches > 0) {
    players.value[index].matches--;
    console.log(players.value);
  }
}
const vp = ref<number>(0);
const mtcUp = () => {
  mtc.value++;
};
const mtcDwn = () => {
  mtc.value--;
};

const winsUp = () => {
  wins.value++;
};
const winsDwn = () => {
  wins.value--;
};
const laUp = () => {
  la.value++;
};
const laDwn = () => {
  la.value--;
};
const lrUp = () => {
  lr.value++;
};
const lrDwn = () => {
  lr.value--;
};
</script>
