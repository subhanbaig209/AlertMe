HackDavis2023 - AlertMe

# Inspiration
The inspiration came from the recent stabbing situation, where students were not notified until they checked their social media. Though 911 had been called minutes after the stabbings, no alerts showed up on PulsePoint or Twitter until hours later. This, on top of other incidents, made us realize the importance of having access to real-time information in such situations. With AlertMe, users are able to view or notify incidents to ensure that everyone is always aware of any potential safety threats nearby.

# What it does
AlertMe allows users to report incidents near them so that others can be notified of these events and be safe. Users will be able to view a feed in live time that updates whenever there is an incident that is reported near them. They will also be able to upvote or downvote a reported incident so that others can verify if the report is accurate. This helps people avoid dangerous incidents in realtime, without relying on user-generated content. In an emergency, safety is the priority; information from social media apps may not always be an option.

# How we built it
Since we were building a phone application, we built AlertMe using React Native, creating custom components along the way (alerts, posts, feed, etc.). To get the user location and the map onto the screen, we used Google Maps API and the Geolocation API.

# Challenges we ran into
Setting up the application was difficult as we had never used React Native before, and it took us a couple of hours to just get a simple screen to show on our phones. Additionally, we had trouble getting the incident data from the Map screen onto the Feed screen since we had trouble passing props to the Feed screen. Another challenge we had was getting the street name of an incident that was reported using just the latitude and longitude from the Geolocation API. We were able to resolve this issue by using the reverseGeocodeAsync API that gets the location name by using the latitude and longitude.

# Accomplishments that we're proud of
We were able the make the whole application functional within 24 hours, which included features such as viewing the feed in live time and adding incidents onto the map for others to see. We are also proud that we contributed to a project that keeps people safe and notified of incidents near them.

# What we learned
We learned how to build mobile applications in React Native and use multiple APIs such as Geolocation and Google Maps. Specifically, one concept we learned that was important in our app was getting the current user's location so that it shows their location on the map.

# What's next for AlertMe
Our upcoming plans involve significant improvements to the backend, including enabling simultaneous usage by multiple users while providing visibility into each other's pinned locations. We are dedicated to creating distinct pin designs for various incidents, facilitating easier identification of events such as car accidents, robberies, or potential threats to personal safety.

To ensure the relevance of the displayed incidents, pins will automatically expire after 24 hours from the time of the occurrence. By doing so, users will have access to the most up-to-date and current information regarding incidents in their area.

