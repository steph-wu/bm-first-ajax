# Your First (Several) Asynchronous Requests

[See assignment in Alexa.](https://alexa.bitmaker.co/cohorts/67/assignments/2055/latest)

#0. Setup and Knowledge Check

1. What HTTP method did your browser use to make the request?
- GET request.

2. How many milliseconds did it take your browser to complete it?
- 117 ms

3. What HTTP status code did the server return? What does that mean?
- 200 OK, request was successful.

4. Look at the "Initiator" and "Type" columns. Was this an xhr/JavaScript/AJAX request or a normal browser request?
- This was a normal browser request.

#1. Your First AJAX request

What are the values in the "Method" and "Status" columns? Compare these values to Step 0.
- For the AJAX request, the method is 'GET' and status is 'Finished'. The response to this request from 'First AJAX App' is identical to step 0, with the method as 'GET' and the status as '200'.

What are the values in the "Type" and "Initiator" columns? Compare these values to Step 0.
- The AJAX request has a type of 'script' and an initiator of 'index.html,' whereas the browser request had initiator 'other' and type 'document'.

#2. Binding to A Click Event

Button created on index.html page to make AJAX request to root path of the server.

#3. Using Information in the Response

The content of the response is "Wow what a ride! I cam all the way from the server!"

#4. When Things Go Wrong...

The new HTTP status code when a request is made to the /pong url is 500 Internal Server Error.

#5. Tidy Up Time...

Add an always callback, and use console.log to output a message like "Hey the request finished!"

#6. All Together Now!

Ensure that each of the done, fail, and always callbacks at least applies a meaningful console.log message.

#7. The Hive Mind

Add button that makes a request to /count.

#8. Sending Data with your Request

Add button that makes a request to /time and sends timezone data.

#9. Receiving HTML in the Response

Add button that makes a HTML request to /a_car and appends the response data into an unordered list.
