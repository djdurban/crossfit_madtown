/*====================================
=            ON DOM READY            =
====================================*/
$(function() {
    
    var schedules = [
        {
            Title: "CrossFit",
            Days: {
                Monday: ["05:30","06:30","12:00","04:00","05:00","06:00"],
                Tuesday: ["05:30","06:30","12:00","04:00","05:00","06:00"],
                Wednesday: ["05:30","06:30","12:00","04:00","05:00","06:00"],
                Thursday: ["05:30","06:30","12:00","04:00","05:00","06:00"],
                Friday: ["05:30","06:30","12:00","04:00","05:00"],
                Saturday: ["07:00","12:00"]
            }
        }
    ]
        
    

	// Toggle Nav on Click
	$('.madtown-schedule').fullCalendar({
	    header: {
				left: 'prev,next today',
				right: 'title'
			},
	    defaultView: 'agendaWeek',
	    defaultDate: '2014-06-12',
	    minTime: '05:00:00',
	    maxTime: '21:00:00',
	    allDaySlot: false,
	    events: function (start, end, timezone, callback) {
	        for(var isched=0;isched<schedules.length; isched++) {
	            var schedule = schedules[isched];
	            
	            for(var iday=0;iday<schedule.Days.length; iday++) {
	                var day = schedule.Days[iday];
	                
	                console.log(day);
	            }
	        }
	    }
	});


});



	$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: '2014-06-12',
			defaultView: 'agendaWeek',
			editable: true,
			events: [
				{
					title: 'All Day Event',
					start: '2014-06-01'
				},
				{
					title: 'Long Event',
					start: '2014-06-07',
					end: '2014-06-10'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2014-06-09T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2014-06-16T16:00:00'
				},
				{
					title: 'Meeting',
					start: '2014-06-12T10:30:00',
					end: '2014-06-12T12:30:00'
				},
				{
					title: 'Lunch',
					start: '2014-06-12T12:00:00'
				},
				{
					title: 'Birthday Party',
					start: '2014-06-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2014-06-28'
				}
			]
		});
		
	});

