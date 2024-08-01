

const periodNames = {
    1: {
        name: "Spanish II Honors",
        room: 236
    },
    2: {
        name: "AP Biology",
        room: 12
    },
    3: {
        name: "AP Eng Lang",
        room: 107
    },
    4: {
        name: "Orchestra",
        room: 146
    },
    Lunch: {
        name: "Lunch",
        room: "Cafeteria"
    },
    5: {
        name: "AP Chemistry",
        room: 9
    },
    "UI class": {
        name: "Linear Algebra",
        room: 61
    },
    AFT: {
        name: "AFT",
        room: 124
    },
    Advisory: {
      name: "Advisory",
      room: 235
    }
}

const MTFSchedule = [
            {
                period: 1, 
                start: {
                    hours: 8,
                    minutes: 50
                },
                end: {
                    hours: 9,
                    minutes: 38
                }
            },{
                period: 2, 
                start: {
                    hours: 9,
                    minutes: 43
                },
                end: {
                    hours: 10,
                    minutes: 31
                }
            },{
                period: 3,
                start: {
                    hours: 10,
                    minutes: 36
                },
                end: {
                    hours: 11,
                    minutes: 24
                }
            },
            {
                period: 4,
                start: {
                    hours: 11,
                    minutes: 29
                },
                end: {
                    hours: 12,
                    minutes: 18
                }
            },{
                period: "Lunch",
                start: {
                    hours: 12,
                    minutes: 18
                }, 
                end: {
                    hours: 12,
                    minutes: 46
                }
            },

            {
                period: 5,
                start: {
                    hours: 12,
                    minutes: 51
                },
                end: {
                    hours: 13,
                    minutes: 39
                }
            },
            {
                period: "AFT",
                start: {
                    hours: 13,
                    minutes: 44
                },
                end: {
                    hours: 14,
                    minutes: 14
                }
            },
          {
            period: "UI class",
            start: {
              hours: 14,
              minutes: 30
            }, end: {
              hours: 15,
              minutes: 20
            }
          }
        ]
const TuSchedule = [
            {
                period: 1, 
                start: {
                    hours: 8,
                    minutes: 50
                },
                end: {
                    hours: 9,
                    minutes: 38
                }
            },{
                period: 2, 
                start: {
                    hours: 9,
                    minutes: 43
                },
                end: {
                    hours: 10,
                    minutes: 31
                }
            },{
                period: 3,
                start: {
                    hours: 10,
                    minutes: 36
                },
                end: {
                    hours: 11,
                    minutes: 24
                }
            },
            {
                period: 4,
                start: {
                    hours: 11,
                    minutes: 29
                },
                end: {
                    hours: 12,
                    minutes: 18
                }
            },{
                period: "Lunch",
                start: {
                    hours: 12,
                    minutes: 18
                }, 
                end: {
                    hours: 12,
                    minutes: 46
                }
            },

            {
                period: 5,
                start: {
                    hours: 12,
                    minutes: 51
                },
                end: {
                    hours: 13,
                    minutes: 39
                }
            },
            {
                period: "AFT",
                start: {
                    hours: 13,
                    minutes: 44
                },
                end: {
                    hours: 14,
                    minutes: 14
                }
            }
        ]
const ThSchedule = [
            {
                period: 1, 
                start: {
                    hours: 8,
                    minutes: 50
                },
                end: {
                    hours: 9,
                    minutes: 35
                }
            },{
                period: 2, 
                start: {
                    hours: 9,
                    minutes: 40
                },
                end: {
                    hours: 10,
                    minutes: 25
                }
            },{
                period: 3,
                start: {
                    hours: 10,
                    minutes: 30
                },
                end: {
                    hours: 11,
                    minutes: 14
                }
            },
            {
                period: 4,
                start: {
                    hours: 11,
                    minutes: 19
                },
                end: {
                    hours: 12,
                    minutes: 7
                }
            },{
                period: "Lunch",
                start: {
                    hours: 12,
                    minutes: 7
                }, 
                end: {
                    hours: 12,
                    minutes: 33
                }
            },

            {
                period: 5,
                start: {
                    hours: 12,
                    minutes: 38
                },
                end: {
                    hours: 13,
                    minutes: 22
                }
            },
          {
            period: "UI class",
            start: {
              hours: 14,
              minutes: 30
            }, end: {
              hours: 15,
              minutes: 20
            }
          }
        ]
const WSchedule = [
            {
                period: 1, 
                start: {
                    hours: 8,
                    minutes: 50
                },
                end: {
                    hours: 9,
                    minutes: 38
                }
            },{
                period: 2, 
                start: {
                    hours: 9,
                    minutes: 43
                },
                end: {
                    hours: 10,
                    minutes: 31
                }
            },{
                period: 3,
                start: {
                    hours: 10,
                    minutes: 36
                },
                end: {
                    hours: 11,
                    minutes: 24
                }
            },
            {
                period: 4,
                start: {
                    hours: 11,
                    minutes: 29
                },
                end: {
                    hours: 12,
                    minutes: 22
                }
            },{
                period: "Lunch",
                start: {
                    hours: 12,
                    minutes: 22
                }, 
                end: {
                    hours: 12,
                    minutes: 46
                }
            },

            {
                period: 5,
                start: {
                    hours: 12,
                    minutes: 51
                },
                end: {
                    hours: 13,
                    minutes: 39
                }
            },
            {
                period: "Advisory",
                start: {
                    hours: 13,
                    minutes: 44
                },
                end: {
                    hours: 14,
                    minutes: 14
                }
            },
          {
            period: "UI class",
            start: {
              hours: 14,
              minutes: 30
            }, end: {
              hours: 15,
              minutes: 20
            }
          }
        ]
const schedule = [{
        school: false
    },{
        school:true,
        periods: MTFSchedule
    },{
    school:true,
    periods: TuSchedule
    },{
        school: true,
        periods:WSchedule
    },
    {
    school:true,
    periods: ThSchedule
},{
        school:true,
        periods: MTFSchedule
        },
    {
        school: false
    }

] 
function doStuff(){
var today = new Date(2023, 4, 18, 12, 30, 40); //new Date(); 

var currentPeriod = {period: null};
var todayWeek = today.getDay();
var update = document.querySelector(".update");
var end = document.querySelector(".ends");
var time = document.getElementById("time");
var monthIcon = document.querySelector(".red-top");
var dayIcon = document.querySelector(".date-num")
var next = document.querySelector(".next");

var tommorowtable = document.getElementById("tommorow");
var todaytable = document.getElementById("today");

if(todaytable == null && schedule[todayWeek%7].school!= false){
    var div = document.createElement("div");
    div.innerHTML =    `
    <h1>Today's Schedule</h1>
    <button id="hide-today" class="hide">˅ Hide</button>
    <table id="today">
    
    </table>`
    div.classList.add("container");
    document.getElementById("tables").appendChild(div);
    var todaytable = document.getElementById("today");
}

function convertTime(time){
    return new Date(today.getFullYear(), today.getMonth(), today.getDate(), time.hours, time.minutes);
}

 
if(today.toLocaleString('default', { month: 'long' }).length > 5){
    monthIcon.textContent = today.toLocaleString('default', { month: 'long' }).slice(0, 3).toUpperCase();
}else{
    monthIcon.textContent = today.toLocaleString('default', { month: 'long' });
}
let TodaySchedule = schedule[todayWeek].periods
TommorowSchedule = schedule[(todayWeek + 1)%7].periods;

dayIcon.textContent = today.getDate();
time.textContent =   moment(today).format("h:mm");

if(schedule[todayWeek%7].school== false){
    if(todaytable.classList.contains("no-school") == false){
        var todayparent = todaytable.parentElement;
        todayparent.removeChild(todaytable);
        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("No School Today"))
        todayparent.appendChild(h2)
        todaytable = h2;
        update.innerHTML = "No School Today";
        end.style.display = "none";
        next.innerHTML = "";
        h2.id = "today";
        h2.classList.add("no-school")
    }


}else{

if(today.getTime() > convertTime(TodaySchedule[TodaySchedule.length - 1].end).getTime()){
    update.innerHTML = "School is over "
    end.innerHTML = "";
    next.innerHTML = "";
    if(todaytable != null){
        todaytable.parentElement.parentElement.removeChild(todaytable.parentElement);
    }
}else if(today.getTime() < convertTime(TodaySchedule[0].start).getTime()){
    update.innerHTML = `School has not started yet. First class is ${periodNames[TodaySchedule[0].period].name} at room ${periodNames[TodaySchedule[0].period].room}.`
    if(Math.round((convertTime(TodaySchedule[0].start).getTime() - today.getTime()) < 1)){
        end.innerHTML = `Starts in <span style='color: red;'>${Math.round((convertTime(TodaySchedule[0].start).getTime() - today.getTime())/1000)}</span> seconds  at ${moment(convertTime(TodaySchedule[0].start)).format("h:mm")}`
    }else if(Math.round((convertTime(TodaySchedule[0].start).getTime() - today.getTime())) == 1){
        end.innerHTML = `Starts in <span style='color: red;'>1</span> minute  at ${moment(convertTime(TodaySchedule[0].start).getTime()).format("h:mm")}`
    }else{
        end.innerHTML = `Starts in ${(Math.round((convertTime(TodaySchedule[0].start).getTime() - today.getTime())/60000))} minutes  at ${moment(convertTime(TodaySchedule[0].start)).format("h:mm")}`
    }
    next.innerHTML = "";
}else{
    for (let index = 0; index < TodaySchedule.length; index++) {
        const period = TodaySchedule[index];
        if((convertTime(period.start).getTime() < today.getTime()) && (today.getTime()< convertTime(period.end).getTime())){
            currentPeriod = {
                period: period.period,
                passing: false
            }
            update.innerHTML = `You should be at room ${periodNames[period.period].room}, ${periodNames[period.period].name}`;
            if(((convertTime(period.end).getTime() - today.getTime())/60000) < 1){
                end.innerHTML = `Ends in <span style='color: red;'>${Math.round((convertTime(period.end).getTime() - today.getTime())/1000)}</span> seconds at ${moment(convertTime(period.end)).format("h:mm")}`;
            }else if(((convertTime(period.end).getTime() - today.getTime())/60000)== 1){
                end.innerHTML = `Ends in <span style='color: red;'>1</span> minute at ${moment(convertTime(period.end)).format("h:mm")}`;
            }else{
                end.innerHTML = `Ends in ${Math.round((convertTime(period.end).getTime() - today.getTime())/60000)} minutes at ${moment(convertTime(period.end)).format("h:mm")}`
            }
            
            if(index+1 == TodaySchedule.length){
                next.innerHTML = "Last Class!"
            }else{
                next.innerHTML = "Next Class: " + periodNames[TodaySchedule[index+1].period].name + " at room " + periodNames[TodaySchedule[index+1].period].room ;
            }
            break;
        }else{

            if(today.getTime() <= convertTime(period.start).getTime()){
                currentPeriod = {
                    period: period.period,
                    passing: true
                }
                update.innerHTML = `Passing Time. Go to ${periodNames[period.period].name} at room ${periodNames[period.period].room}. `;
                if((convertTime(period.start).getTime() - today.getTime())/60000 < 1){
                    end.innerHTML = `Ends in <span style='color: red;'>${Math.round((convertTime(period.start).getTime() - today.getTime())/1000)}</span> seconds at ${moment(convertTime(period.start)).format("h:mm")}`;
                }else{
                    end.innerHTML = `Ends in ${Math.round((convertTime(period.start).getTime() - today.getTime())/60000)} minutes at ${moment(convertTime(period.start)).format("h:mm")}`
                }
                next.innerHTML = "";
                break;
            
        }
    }
}
    
       


}
if(today.getTime() < convertTime(TodaySchedule[TodaySchedule.length - 1].end).getTime()){
    todaytable.innerHTML = `
    <tr id="table-header"> 
    <th>Period</th>
    <th>Class</th>
    <th>Time</th>
    <th>Room</th>
    </tr>
    `;
    TodaySchedule.forEach(period => {
        var mytimestart = period.start;
        var mytimeend = period.end;
        todaytable.innerHTML += `                <tr style="${period.period == currentPeriod.period? (currentPeriod.passing == true? "border-top: 2px solid yellow;":"background-color: yellow;"):""}">
        <td>${period.period}</td>
        <td class="name">${periodNames[period.period].name}</td>
        <td class="time">${moment(mytimestart).format("h:mm") + "-" + moment(mytimeend).format("h:mm")}</td>
        <td class="toom">${periodNames[period.period].room}</td>
    </tr>`
    })
}
}
if(schedule[(todayWeek + 1)%7].school == false){
    var tommorow = document.getElementById("tommorow");
    var tommorowparent = tommorow.parentElement;
    tommorowparent.removeChild(tommorow);
    var h2 = document.createElement("h2");
    h2.classList.add("no-school")
    h2.appendChild(document.createTextNode("No School Tommorow"))
    h2.id = "tommorow";
    tommorowtable = h2;
    tommorowparent.appendChild(h2)
    
}else{
    tommorowtable.innerHTML = `
    <tr id="table-header"> 
    <th>Period</th>
    <th>Class</th>
    <th>Time</th>
    <th>Room</th>
    </tr>
    `;
    TommorowSchedule.forEach(period => {
        var mytimestart = period.start;
        var mytimeend = period.end;
        tommorowtable.innerHTML += `
        <tr>
        <td>${period.period}</td>
        <td class="name">${periodNames[period.period].name}</td>
        <td class="time">${moment(mytimestart).format("h:mm") + "-" + moment(mytimeend).format("h:mm")}</td>
        <td class="toom">${periodNames[period.period].room}</td>
    </tr>`
    })
}
}
doStuff();
setInterval(doStuff,1000)