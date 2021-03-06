angular
  .module('warRoom')
  .constant('widgetList', [
    {
      name: 'CalendarWidget',
      displayName: 'Calendar',
      dependencies: [
          'widgets/calendar-widget/calendar-compile.js',
          'widgets/calendar-widget/calendar-functions.js',
          'widgets/calendar-widget/calendar-controller.js',
          'widgets/calendar-widget/calendar-directive.js',
          'widgets/calendar-widget/calendar-styles.css'
      ],
      directive: 'calendarWidget'
    },
      {
      name: 'StashWidget',
      displayName: 'Stash',
      dependencies: [
        'widgets/stash-widget/stash-api.js',
        'widgets/stash-widget/stash-widget-service.js',
        'widgets/stash-widget/stash-widget-controller.js',
        'widgets/stash-widget/stash-widget-directive.js',
        'widgets/stash-widget/stash-widget.css'
      ],
      directive: 'stashWidget',
      initialize: 'stashWidgetService.initialize',
      serialize: 'stashWidgetService.serialize'
    }, {
      name: 'RedditWidget',
      displayName: 'Reddit',
      dependencies: [
        'widgets/reddit-widget/reddit-service.js',
        'widgets/reddit-widget/reddit-controller.js',
        'widgets/reddit-widget/reddit-directive.js',
        'widgets/reddit-widget/reddit-style.css'
      ],
      directive: 'redditWidget'
    },
    {
      name: 'TimeWidget',
      displayName: 'Time',
      dependencies: [
        'widgets/time-widget/googlemaps-api-service.js',
        'widgets/time-widget/timezone-api-service.js',
        'widgets/time-widget/time-widg-controller.js',
        'widgets/time-widget/time-widg-directive.js',
        'widgets/time-widget/time-style.css',
        'widgets/time-widget/time-widget-service.js'
      ],
      directive: 'timeWidget',
      initialize: 'timeWidgetService.initialize',
      serialize:'timeWidgetService.serialize'
    },
    {
      name: 'WeatherWidget',
      displayName: 'Weather',
      dependencies: [
        'widgets/weather-widget/weather-api-service.js',
        'widgets/weather-widget/weather-widget-controller.js',
        'widgets/weather-widget/weather-widget-directive.js',
        'widgets/weather-widget/weather-widget.html',
        'widgets/weather-widget/weather-widget.css'
      ],
      directive: 'weatherWidget'
    },
      {
          name: 'NotesWidget',
          displayName: 'Notes',
          dependencies: [
              'bower_components/showdown/dist/showdown.js',
              'widgets/notes-widget/notes-widget-service.js',
              'widgets/notes-widget/notes-widget-controller.js',
              'widgets/notes-widget/notes-widget.js',
              'widgets/notes-widget/notes-widget.css'
          ],
          directive: 'notesWidget',
          initialize: 'notesWidgetService.initialize',
          serialize: 'notesWidgetService.serialize'
      },
      {
          name: 'NewsWidget' ,
          displayName: 'News',
          dependencies: [
              'widgets/news-widget/nyt-service.js',
              'widgets/news-widget/news-service.js',
              'widgets/news-widget/espn-service.js',
              'widgets/news-widget/news-controller.js',
              'widgets/news-widget/news-directive.js',
              'widgets/news-widget/news-style.css'
              // 'widgets/new-widget/api-key.js'

          ],
          directive: 'newsWidget'
      }
  ]);

angular.module('warRoom')
    .constant('googlemapsApiKey', 'AIzaSyBErhwJQ6hNNAm2i_VOc2PXPPCgpF9jhd4');