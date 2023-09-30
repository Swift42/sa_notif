# sa_notif
Star Atlas -> Sage Labs: Get a notification when a mining or crafting process is done.

Written by Swift42 for the Star Atlas Community

How to install:
  Copy the text from bookmarklet.js, create a bookmark in Chrome and paste the text
  as the URL.

How to use:
  Start Sage Labs. After the login click on the saved bookmark. A notification should appear
  "Mining/crafting event listener added" (on the first run you need to allow notifications).
  When you initiate a mining from the "Manage Fleet->Mining OPs" page or a crafting
  from the "Starbase Crafting Workshop" page, the script reads the completion time
  and a timer is started.
  When the timer reaches 0, you will get a notification.

Notes: 
  You need to initiate the mining from the "Manage Fleet->Mining OPs" page. 
  Starting the mining from "Mining Operations" is not supported currently.
  If you reload the Sage Labs page, the script and all timers are removed.
  If you put your computer into standby mode, the timers may not work correctly.
  This script currently doesn't check if you deny the transaction in your wallet.
  This script comes without any warranty :-)

Troubleshooting:
  If Chrome puts your background tab to sleep, try to add labs.staratlas.com 
  to the memory saver exclude list here: chrome://settings/performance
