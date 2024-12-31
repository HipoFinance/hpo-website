// Elements
const dexDedust = document.getElementById('dedust')
const dexSton = document.getElementById('ston')
const dexTonco = document.getElementById('tonco')

const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownItems = document.querySelectorAll('.dropdown-item');

const dailyReward_1 = document.getElementById('daily-reward-1')
const dailyReward_7 = document.getElementById('daily-reward-7')
const dailyReward_30 = document.getElementById('daily-reward-30')
const dailyReward_365 = document.getElementById('daily-reward-365')

const investInput = document.getElementById('invest-value')

let rewardMap = new Map()

let selectedDex = 'ston'
let selectedPool = 'hton-hpo'
let investAmount = 100

selectDex(selectedDex)
selectPool(selectedPool)
setInvestAmount(investAmount)

readAndUpdateRewardInfo();

dexDedust.addEventListener('click', () => {
    showToast('Comming soon.')
    // selectDex('dedust')
    // updateRewards();
});

dexSton.addEventListener('click', () => {
    selectDex('ston')
    updateRewards();
});

dexTonco.addEventListener('click', () => {
    showToast('Comming soon.')
    // selectDex('tonco')
    // updateRewards();
});

function selectDex(dex) {
    selectedDex = dex
    updateRewards();

    dexSton.classList.add('bg-transparent')
    dexDedust.classList.add('bg-transparent')
    dexTonco.classList.add('bg-transparent')
    switch (dex) {
        case 'ston':
            dexSton.classList.replace('bg-transparent', 'bg-purple1')
            break;
        case 'dedust':
            dexDedust.classList.replace('bg-transparent', 'bg-purple1')
            break;
        case 'tonco':
            dexTonco.classList.replace('bg-transparent', 'bg-purple1')
            break;
    }
}

function selectPool(pool) {
    selectedPool = pool
}

function setInvestAmount(value) {
    investAmount = value
    investInput.value = investAmount.toLocaleString()
}

// Toggle Dropdown
dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});

// Select Option and Close Dropdown
dropdownItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const pool = item.getAttribute('pool-name');
    selectPool(pool)

    updateRewards();

    const poolHtml = item.innerHTML;
    // Update Button Text
    dropdownButton.innerHTML = `
      ${poolHtml}
      <img src="down.svg" class="size-6"/>
    `;

    // Close Dropdown
    dropdownMenu.classList.add('hidden');
  });
});

// Close Dropdown on Outside Click
document.addEventListener('click', (e) => {
  if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add('hidden');
  }
});

document.getElementById('invest-value').addEventListener('input', function (e) {
    let input = e.target.value;
  
    // Remove all non-digit characters
    input = input.replace(/[^\d.]/g, '');
 
    // Update invest value
    investAmount = Number(input)

    // Ensure only one dot for decimals
    const parts = input.split('.');

    // Add commas to the integer part
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Rejoin the integer and fractional parts
    const formatted = parts.join('.');
      
    // Set the formatted value back to the input
    e.target.value = formatted;

    updateRewards();
});

function updateRewards() {
    dailyReward_1.innerText = '$' + calculatedReward(investAmount, 1).toLocaleString()
    dailyReward_7.innerText = '$' + calculatedReward(investAmount, 7).toLocaleString()
    dailyReward_30.innerText = '$' + calculatedReward(investAmount, 30).toLocaleString()
    dailyReward_365.innerText = '$' + calculatedReward(investAmount, 365).toLocaleString()
};

function calculatedReward(invest, days) {
    let reward = 0
    switch (selectedDex) {
        case 'ston':
            const key = selectedDex + '-' + selectedPool
            let data = rewardMap.get(key)
            let apy = 0
            if (data != null) {
                apy = data.apy
            }
            let unitReward = apy * days / 365

            reward = invest * unitReward
            break;

        case 'dedust':
            break;

        case 'tonco':
            break;
    }

    return reward
}

async function readAndUpdateRewardInfo() {
    let farmApy = 0
    let poolApy = 0

    const gauge = await readGauge()
    if (gauge != null) {
        const data = gauge.result

        //-------------------------------------------
        // STON.fi pools

        // hTON/HPO pool
        farmApy = data.dex.ston.farm_hton_hpo.status === 'operational' ? data.dex.ston.farm_hton_hpo.apy : 0
        poolApy = data.dex.ston.pool_hton_hpo.apy_7d
        rewardMap.set('ston-hton-hpo', {apy: farmApy + poolApy})

        // hTON/TON pool
        farmApy = data.dex.ston.farm_hton_ton.status === 'operational' ? data.dex.ston.farm_hton_ton.apy : 0
        poolApy = data.dex.ston.pool_hton_ton.apy_7d
        rewardMap.set('ston-hton-ton', {apy: farmApy + poolApy})

        // HPO/TON pool
        farmApy = data.dex.ston.farm_hpo_ton.status === 'operational' ? data.dex.ston.farm_hpo_ton.apy : 0
        poolApy = data.dex.ston.pool_hpo_ton.apy_7d
        rewardMap.set('ston-hpo-ton', {apy: farmApy + poolApy})

        //-------------------------------------------
        // DeDust pools
        
        // To be done.

        //-------------------------------------------
        // TONCO pools

        // To be done.
    }

    updateRewards()

    // Schedule the next call for 5 minutes later
    setTimeout(readAndUpdateRewardInfo, 5 * 60 * 1000);
}

async function readGauge() {
    try {
        // Replace with your web service URL
        const url = 'https://gauge.hipo.finance/data';

        // Make the HTTP request
        const response = await fetch(url);

        // Check if the response is OK.
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse JSON and return data
        const data = await response.json();
        return data
    } catch (error) {
        // Handle errors
        console.error('Error fetching farm data:', error);
        return null
    }   
}

function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    toast.innerText = message;

    toast.classList.remove('opacity-0');
    
    setTimeout(() => {
        // Fade out the toast
        toast.classList.add('opacity-0');
    }, duration);
}
