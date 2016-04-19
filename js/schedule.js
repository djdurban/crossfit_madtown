/*====================================
=            ON DOM READY            =
====================================*/
$(function() {
    
    var schedules = [
        {
            Title: "CrossFit",
            Duration: 1,
            Days: [
                [], //Sunday
                ["05:30","06:30","12:00","16:00","17:00","18:00"], //Monday
                ["05:30","06:30","12:00","16:00","17:00","18:00"], //Tuesday
                ["05:30","06:30","12:00","16:00","17:00","18:00"], //Wednesday
                ["05:30","06:30","12:00","16:00","17:00","18:00"], //Thursday
                ["05:30","06:30","12:00","16:00","17:00"], //Friday
                ["07:00","12:00"] //Saturday
            ]
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
	        var events = [];
	        var startDate = moment(start);
	        for(var isched=0;isched<schedules.length; isched++) {
	            var schedule = schedules[isched];
	            
	            for(var iday=0;iday<schedule.Days.length; iday++) {
	                var times = schedule.Days[iday];
	                for(var itime=0;itime<times.length; itime++) {
	                    var eventDate = moment(startDate.format('L') + " " + times[itime]);
    	                var event = {
    	                    title: schedule.Title,
    	                    start: eventDate,
    	                    end: eventDate.add(schedule.Duration,'h')
    	                }
    	                events.push(event);
	                }
	                
	            }
	            startDate.add(1,'d');
	        }
	        callback(events);
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

