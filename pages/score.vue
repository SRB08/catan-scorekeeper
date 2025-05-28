<template class="p-2">
  <div class="page-container">
    <div class="">
      <div
        style="background-image: url('/images/bg.jpg')"
        class="relative bg-cover bg-center h-30 w-full flex items-center justify-start"
      >
        <h1 class="text-3xl font-bold text-yellow-300 text-left ml-4">
          The Settlers <br />
          of <br />
          Catan
        </h1>

        <!-- <img src="/images/logo.png" alt="Settlers of Catan Logo" class="h-16" /> -->
      </div>
    </div>

    <div class="flex items-center">
      <input
        class="input-elegant"
        type="text"
        v-model="pn"
        placeholder="enter farmer name"
      />

      <input
        v-model="assignColor"
        type="color"
        class="w-10 h-10 p-0 border border-gray-300 rounded m-2"
      />
      <button class="btn-elegant" @click="addPlayer">enter</button>
    </div>
    <table class="table-auto w-full border border-gray-400 border-collapse">
      <thead class="bg-gray-200">
        <tr>
          <th class="border border-gray-400 px-4 py-2">Farmers</th>
          <th class="border border-gray-400 px-4 py-2">matches</th>
          <th class="border border-gray-400 px-4 py-2">wins</th>
          <th class="border border-gray-400 px-4 py-2">2nd Position</th>
          <th class="border border-gray-400 px-4 py-2">3rd Position</th>
          <th class="border border-gray-400 px-4 py-2">longest roads</th>
          <th class="border border-gray-400 px-4 py-2">largest armies</th>
          <th class="border border-gray-400 px-4 py-2">points</th>
          <th class="border border-gray-400 px-4 py-2">Delete</th>
        </tr>
      </thead>

      <tbody class="w-full">
        <tr v-for="(player, index) in players" :key="player.name">
          <!-- name -->
          <!-- name -->
          <td
            class="relative border border-gray-400 px-4 py-2 text-center align-middle"
          >
            <!-- Editable Color Input -->
            <input
              type="color"
              v-model="player.color"
              class="absolute -left-9 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-md cursor-pointer shadow-md transition-transform duration-200 hover:scale-110 hover:shadow-lg"
              @change="saveToLocalStorage"
            />
            <span class="text-2xl text-gray-600 font-medium font-mono">
              {{ player.name }}
            </span>
          </td>

          <!-- matches -->
          <td class="border border-gray-400 px-4 py-2">
            <div class="flex justify-around items-center">
              <div>
                <span class="text-2xl text-gray-600 font-medium font-mono">
                  {{ player.matches }}
                </span>
              </div>
              <div>
                <span @click="increaseMatches(index)" class="icon-button-green">
                  <ArrowUpIcon class="w-2 h-2 stroke-[3]" />
                </span>
                <span @click="decreaseMatches(index)" class="icon-button-red">
                  <ArrowDownIcon class="w-2 h-2 stroke-[3]" />
                </span>
              </div>
            </div>
          </td>
          <!-- wins -->
          <td class="border border-gray-400 px-4 py-2">
            <div class="flex justify-around items-center">
              <div>
                <span class="text-2xl text-gray-600 font-medium font-mono">
                  {{ player.wins }}
                </span>
              </div>
              <div>
                <span @click="increaseWins(index)" class="icon-button-green">
                  <ArrowUpIcon class="w-2 h-2 stroke-[3]" />
                </span>
                <span @click="decreaseWins(index)" class="icon-button-red">
                  <ArrowDownIcon class="w-2 h-2 stroke-[3]" />
                </span>
              </div>
            </div>
          </td>
          <!-- 2nd position -->
          <td class="border border-gray-400 px-4 py-2">
            <div class="flex justify-around items-center">
              <div>
                <span class="text-2xl text-gray-600 font-medium font-mono">
                  {{ player.secondPos }}
                </span>
              </div>
              <div>
                <span @click="increase2nd(index)" class="icon-button-green">
                  <ArrowUpIcon class="w-2 h-2 stroke-[3]" />
                </span>
                <span @click="decrease2nd(index)" class="icon-button-red">
                  <ArrowDownIcon class="w-2 h-2 stroke-[3]" />
                </span>
              </div>
            </div>
          </td>
          <!-- 3rd position -->
          <td class="border border-gray-400 px-4 py-2">
            <div class="flex justify-around items-center">
              <div>
                <span class="text-2xl text-gray-600 font-medium font-mono">
                  {{ player.thirdPos }}
                </span>
              </div>
              <div>
                <span @click="increase3rd(index)" class="icon-button-green">
                  <ArrowUpIcon class="w-2 h-2 stroke-[3]" />
                </span>
                <span @click="decrease3rd(index)" class="icon-button-red">
                  <ArrowDownIcon class="w-2 h-2 stroke-[3]" />
                </span>
              </div>
            </div>
          </td>
          <!-- longestR -->
          <td class="border border-gray-400 px-4 py-2">
            <div class="flex justify-around items-center">
              <div>
                <span class="text-2xl text-gray-600 font-medium font-mono">
                  {{ player.longestR }}
                </span>
              </div>
              <div>
                <span @click="increaseRoad(index)" class="icon-button-green">
                  <ArrowUpIcon class="w-2 h-2 stroke-[3]" />
                </span>
                <span @click="decreaseRoad(index)" class="icon-button-red">
                  <ArrowDownIcon class="w-2 h-2 stroke-[3]" />
                </span>
              </div>
            </div>
          </td>

          <!-- largestA -->
          <td class="border border-gray-400 px-4 py-2">
            <div class="flex justify-around items-center">
              <div>
                <span class="text-2xl text-gray-600 font-medium font-mono">
                  {{ player.largestA }}
                </span>
              </div>
              <div>
                <span @click="increaseArmy(index)" class="icon-button-green">
                  <ArrowUpIcon class="w-2 h-2 stroke-[3]" />
                </span>
                <span @click="decreaseArmy(index)" class="icon-button-red">
                  <ArrowDownIcon class="w-2 h-2 stroke-[3]" />
                </span>
              </div>
            </div>
          </td>

          <!-- ratings -->
          <td class="border border-gray-400 px-4 py-2 text-center align-middle">
            <span class="text-2xl text-gray-600 font-medium font-mono">
              {{
                (
                  ((player.wins * 4 +
                    player.secondPos * 2 +
                    player.thirdPos * 1 +
                    player.longestR * 0.5 +
                    player.largestA * 0.5) *
                    10) /
                  player.matches
                ).toFixed(1)
              }}
            </span>
          </td>
          <!-- Delete -->
          <td class="border border-gray-400 px-4 py-2 text-center">
            <span @click="deletePlayer(index)" class="icon-button-green">
              <TrashIcon class="w-2 h-2 stroke-[3]" />
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
// script setup
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/vue/24/outline";
import { TrashIcon } from "@heroicons/vue/20/solid";
TrashIcon;
// refs
const mtc = ref<number>(0);
const wins = ref<number>(0);
const lr = ref<number>(0);
const la = ref<number>(0);
const ratio = ref<number>(0);

const pn = ref<string>("");
const assignColor = ref<string>("#rrggbb");
const np = ref<boolean>(false);
interface Player {
  name: string;
  matches: number;
  wins: number;
  secondPos: number;
  thirdPos: number;
  longestR: number;
  largestA: number;
  rating: number;
  color: string;
}

const players = ref<Player[]>([]);

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

const addPlayer = (name: string) => {
  const existing = players.value.find(
    (p) => p.name.toLowerCase() === pn.value.toLowerCase()
  );
  if (!existing) {
    players.value.push({
      name: pn.value,
      matches: 0,
      wins: 0,
      secondPos: 0,
      thirdPos: 0,
      longestR: 0,
      largestA: 0,
      rating: 0,
      color: assignColor.value,
    });
  }
  pn.value = "";
  assignColor.value = "";
};
function deletePlayer(index: number) {
  players.value.splice(index, 1);
}
function saveToLocalStorage() {
  localStorage.setItem("players", JSON.stringify(players.value));
}

// matches buttons
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
// wins buttons
function increaseWins(index: number) {
  if (
    players.value[index].wins +
      players.value[index].secondPos +
      players.value[index].thirdPos <
    players.value[index].matches
  ) {
    players.value[index].wins++;
    console.log(players.value);
  }
}

function decreaseWins(index: number) {
  if (players.value[index].wins > 0) {
    players.value[index].wins--;
    console.log(players.value);
  }
}
// 2nd position buttons
function increase2nd(index: number) {
  if (
    players.value[index].wins +
      players.value[index].secondPos +
      players.value[index].thirdPos <
    players.value[index].matches
  ) {
    players.value[index].secondPos++;
    console.log(players.value);
  }
}

function decrease2nd(index: number) {
  if (players.value[index].secondPos > 0) {
    players.value[index].secondPos--;
    console.log(players.value);
  }
}

// 3rd position buttons
function increase3rd(index: number) {
  if (
    players.value[index].wins +
      players.value[index].secondPos +
      players.value[index].thirdPos <
    players.value[index].matches
  ) {
    players.value[index].thirdPos++;
    console.log(players.value);
  }
}

function decrease3rd(index: number) {
  if (players.value[index].thirdPos > 0) {
    players.value[index].thirdPos--;
    console.log(players.value);
  }
}
// longestR buttons

function increaseRoad(index: number) {
  players.value[index].longestR++;
  console.log(players.value);
}

function decreaseRoad(index: number) {
  if (players.value[index].longestR > 0) {
    players.value[index].longestR--;
    console.log(players.value);
  }
}

// largestA buttons
function increaseArmy(index: number) {
  players.value[index].largestA++;
  console.log(players.value);
}

function decreaseArmy(index: number) {
  if (players.value[index].largestA > 0) {
    players.value[index].largestA--;
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
<style scoped>
.page-container {
  padding: 10px;
  max-width: 1400px;
  margin: 0 auto;
}

.icon-button-red {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem; /* Same as p-1 */
  border: 2px solid #f87171; /* red-400 or similar */
  margin: 0.3rem; /* Same as m-2 */
  border-radius: 0.5rem; /* Same as rounded-lg */
  color: #7f1d1d; /* Tailwind's red-900 */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.icon-button-red:hover {
  background-color: #fee2e2; /* Tailwind's red-100 */
  transform: scale(1.1);
}
.icon-button-green {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem; /* Same as p-1 */
  border: 2px solid #1d7f47; /* red-400 or similar */
  margin: 0.3rem; /* Same as m-2 */
  border-radius: 0.5rem; /* Same as rounded-lg */
  color: #1d7f47; /* Tailwind's red-900 */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.icon-button-green:hover {
  background-color: #e2feea; /* Tailwind's red-100 */
  transform: scale(1.1);
}
.input-elegant {
  padding: 10px 16px;
  width: 100%;
  max-width: 320px;
  margin: 20px 0px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
}

.input-elegant:focus {
  outline: none;
  border-color: #b6b4d5;
  box-shadow: 0 0 0 3px rgba(196, 195, 221, 0.3); /* soft indigo glow */
}

.btn-elegant {
  padding: 10px 20px;
  margin: 20px;
  font-size: 16px;
  background-color: #d4a0c2;
  color: rgb(75, 74, 74);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.447);

  transition: all 0.2s ease, transform 0.1s ease;
}

.btn-elegant:hover {
  background-color: #915c7e;
  color: #c3c3c3;
  transform: translateY(-1px);
}

.btn-elegant:active {
  transform: scale(0.98);
}
.custom-font {
  font-family: cursive;
  font-size: larger;
  margin-right: 10px;
}
</style>
