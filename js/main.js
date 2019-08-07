
console.log('hello world');

// BELL NOTIFICATIONS ==========================================================
const bell = document.getElementById('bell');
const notifications = document.getElementById('notifications');

bell.addEventListener ('click', ()=> {
	window.alert("Q: What part of a house is a dog's favorite?");
	window.alert('A: The woof!!!');
	notifications.style.display = 'none';
});

// DASHBOARD ALERT =============================================================

let alert = document.getElementById('alert');

alert.innerHTML = "<div class='alert-banner'><p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p><p><strong  class='alert-banner-close'>X</strong></p></div>"

alert.addEventListener('click', e => {
	const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alert.style.display = "none";
  }
})

// Line Chart ==================================================================


let trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31"
  ],
  datasets: [{
    data: [
       750,
       1250,
       1000,
       2000,
       1500,
       1750,
       1250,
       1850,
       2250,
       1500,
       2500
     ],
    backgroundColor: '#b6c649',
    borderWidth: 1,
  }]
};

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 1000
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend: {
    display: false
  }
};

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

// LINE CHART NAVIGATION

const nav = document.getElementById('traffic-navigation')

nav.addEventListener('click', () => {
  let removeActive = document.getElementsByClassName('active');
  let target = event.target;
  removeActive[0].classList.remove('active');
  target.classList.add('active');

  if (target.innerText === "Hourly") {
    trafficData.datasets[0].data = [
      83,
      52,
      41,
      31,
      112,
      72,
      52,
      77,
      37,
      62,
      104
    ];
  } else if (target.innerText === "Daily") {
    trafficData.datasets[0].data = [
      362,
      312,
      250,
      650,
      375,
      437,
      600,
      675,
      562,
      375,
      625
    ];
  } else if (target.innerText === "Weekly") {
    trafficData.datasets[0].data = [
      750,
      1250,
      1000,
      2000,
      1500,
      1750,
      1250,
      1850,
      2250,
      1500,
      2500
    ];
  } else if (target.innerText === "Monthly") {
    trafficData.datasets[0].data = [
      30000,
      15000,
      12000,
      24000,
      27000,
      21000,
      15000,
      22200,
      18000,
      18000,
      9000
    ];
  }
  trafficChart.update();
})

// Daily Traffic Bar Chart =====================================================

const dailyCanvas = document.getElementById('daily-chart');

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#931f1d',
    borderWidth: 1
  }]
};

const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend : {
    display: false
  }
};

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

// Mobile Chart ================================================================

const mobileCanvas = document.getElementById('mobile-chart');

const mobileData = {
  labels: ['Desktop', 'Tablet', 'Phones',],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500,],
    borderWidth: 0,
    backgroundColor: [
      '#ffb30f',
      '#2f97c1',
      '#fd151b',
    ]
  }]
};

const mobileOptions = {
  legend: {
    position: 'bottom',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold',
    }
  }
}

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions,
});

// MESSAGES JS =================================================================

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

user.value = "";
message.value = "";


send.addEventListener ('click', () => {
  event.preventDefault();
  if (user.value === "" && message.value === "") {
    window.alert("Please fill out user and message fields before sending");
  } else if (user.value === "") {
    window.alert("Please fill out user field before sending");
  } else if (message.value === "") {
    window.alert ("Please fill out message field before sending");
  } else {
    window.alert(`Message succesfully sent to: ${user.value}`);
  }
});

// AUTOCOMPLETE ================================================================

const members = ["vader.dog@example.com",
				 			   "rufus.dog@example.com",
							   "snickers.dog@example.com",
				 			   "bandit.dog@example.com",]

$(function () {
	$('#userField').autocomplete({
		source: [members]
	});
});

// LOCAL STORAGE ===============================================================

const emailNotifications = document.getElementById('emailNotifications');
const publicProfile = document.getElementById('publicProfile');
const timeZone = document.getElementById('timeZone');
const settingsSave = document.getElementById('settingsSave');
const settingsCancel = document.getElementById('settingsCancel');

const saveSetting = function() {
  localStorage.setItem('emailNotifications', emailNotifications.checked);
  localStorage.setItem('publicProfile', publicProfile.checked);
  localStorage.setItem('timeZone', timeZone.value);
}

let storedEmail = localStorage.getItem('emailNotifications', emailNotifications.checked);
let storedPublicProfile = localStorage.getItem('publicProfile', publicProfile.checked);
let storedTimeZone = localStorage.getItem('timeZone', timeZone.value);


document.addEventListener('DOMContentLoaded', ()=> {
  emailNotifications.checked = (storedEmail === 'true');
  publicProfile.checked = (storedPublicProfile === 'true');
  timeZone.value = storedTimeZone;
})

settingsSave.addEventListener('click', ()=> {
  saveSetting();
  window.alert('Settings Saved');
})

settingsCancel.addEventListener('click', ()=> {
  emailNotifications.checked = false;
  publicProfile.checked = false;
  timeZone.value = "Select a Timezone";
  saveSetting();
  window.alert('Settings Cancelled');
})
