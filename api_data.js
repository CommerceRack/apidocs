define({ api: [
  {
    "type": "",
    "url": "{}",
    "title": "API Usage",
    "name": "API_Usage",
    "group": "INTRODUCTION",
    "description": "<p>Parameters are passed back and forth using a json hash containing 3 critical elements: _uuid, _cartid, and either _cmd (for single commands)  The API itself is designed to be asynchronous, however at this time only a synchronous responses are available. </p> <ul> <li>_uuid : a unique request id, this is passed back, and is used to identify duplicate requests.</li> <li>_cartid : the unique cart id (cart id) for this cart, you will receive this after making a request if you do not pass one, you must store this in the browser and pass it on subsequent requests.</li> <li>_cmd : a complete list of commands is passed below.  If _cmd is used then parameters to _cmd are passed in the upper hash at the same level as _cmd.  If @cmds is used, then that is an array of hashes, each with their own &quot;_cmd&quot; - the example below includes <em>both usages</em>, however you will only need to use one:</li> </ul> ",
    "examples": [
      {
        "title": "Simple Request",
        "content": "POST http://www.domain.com/jsonapi/call/v201411/time.json",
        "type": "json"
      },
      {
        "title": "{",
        "content": "{\n\"_uuid\" : 1234,\n\"_cartid\" : \"12345\",\n\"_cmd\" : \"cartItemsAdd\",\n\"_tag\" : \"some data you'd like returned\",\n\"_v\" : \"unique mvc/app id (used for debugging)\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Time Response (json)",
          "content": "{\"_rcmd\":\"time\",\"unix\":1417115824,\"_rtag\":null,\"_uuid\":1417115824}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "INTRODUCTION"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Error Handling",
    "name": "Error_Handling",
    "group": "INTRODUCTION",
    "description": "<table> <thead> <tr> <th>ErrType</th> <th>Cause</th> </tr> </thead> <tbody> <tr> <td>youwarn</td> <td>a warning, not really an error, should be displayed to user.</td> </tr> <tr> <td>youerr</td> <td>an error caused by the user (ex: data input), easily correctable</td> </tr> <tr> <td>appwarn</td> <td>a warning, should be logged to developer console</td> </tr> <tr> <td>apperr</td> <td>a developer error (probably not correctable by user), ex: data formatting -- this is something the app developer can fix.</td> </tr> <tr> <td>apiwarn</td> <td>an issue communicating with a third party, does not indicate success/fail</td> </tr> <tr> <td>apierr</td> <td>server error (probably not correctable by app), ex: facebook plugin did not work, site offline for maintenance, but usually an uncorrectable 3rd party error.</td> </tr> <tr> <td>iseerr</td> <td>backend error, reserved for application to handle &#39;server down&#39;, &#39;unreachable&#39; or otherwise &#39;invalid response format&#39; errors</td> </tr> <tr> <td>cfgerr</td> <td>configuration error (something in the server configuration prohibits or blocks the request)</td> </tr> </tbody> </table> <p>  Handling errors is <em>critical</em> to a well behaved application, since there are literally hundreds of things   which can go wrong at any one time.  With each command (_cmd) request the backend will return at a    minimum: &quot;rcmd&quot;, &quot;rid&quot;, and &quot;rmsg&quot;. </p> <p>  The exact response format depends on how the request was made, if _cmd is used, then the response will    include &quot;rcmd&quot; in the response, if @cmds was used, then both a top level &quot;rcmd&quot; indicating    success/failure/ warnings of all commands, in addition to an array of hashes containing rcmds for   each individual request.</p> <p>  It is important when working with @cmds that you still check &quot;rcmd&quot; before looking at responses in @rcmds because based on the rcmd (ex: &quot;ise&quot;) there may be no specific responses. </p> <p>  <em>do not</em> check for the presence of &#39;errid&#39; to determine if an error occurred. if &#39;_rcmd&#39; had a warning   (such as old call parameters) then errid and errmsg may also be returned, even though the request had   actually succeeded.</p> ",
    "examples": [
      {
        "title": "test",
        "content": "test",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "INTRODUCTION"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Pipelined Requests",
    "name": "PipelinedRequests",
    "group": "INTRODUCTION",
    "examples": [
      {
        "title": "{",
        "content": "\n{\n\"_cmd\" : \"pipeline\",\n\"@cmds\" : [\n  { \"_cmd\" : \"\", .. other parameters .. }\n  ],\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Sample Input",
          "content": "\n{\n\"_rcmd\" : \"pipeline\",\n\"@rcmds\" : [\n\t{ \"_rcmd\" : \"\", .. other parameters .. }\n\t],\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "INTRODUCTION"
  },
  {
    "type": "POST",
    "url": "/adminControlPanelAction",
    "title": "adminControlPanelAction",
    "group": "admin",
    "name": "adminControlPanelAction",
    "description": "<p>special functions to automate system level behaviors. <strong> EXPERIMENTAL (may change significantly in future versions) </strong></p> <table> <thead> <tr> <th>verb</th> <th>explanation</th> </tr> </thead> <tbody> <tr> <td>config-rebuild</td> <td>rebuilds config file</td> </tr> <tr> <td>uwsgi-restart</td> <td>restart uwsgi server</td> </tr> <tr> <td>nginx-restart</td> <td>restart nginx server</td> </tr> </tbody> </table> ",
    "parameter": {
      "fields": {
        "Input": [
          {
            "group": "Input",
            "type": "String",
            "optional": false,
            "field": "verb",
            "description": "<p>see verb table</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Output": [
          {
            "group": "Output",
            "type": "String",
            "optional": false,
            "field": "contents",
            "description": "<p>output from operation</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminPasswordUpdate",
    "title": "adminPasswordUpdate",
    "name": "adminPasswordUpdate",
    "group": "admin",
    "description": "<p>changes a users password</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "oldold",
            "description": "<p>password</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "newnew",
            "description": "<p>passowrd</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminPlatformHealth",
    "title": "adminPlatformHealth",
    "name": "adminPlatformHealth",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminPlatformLogDownload",
    "title": "adminPlatformLogDownload",
    "name": "adminPlatformLogDownload",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "GUID",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminPlatformLogList",
    "title": "adminPlatformLogList",
    "name": "adminPlatformLogList",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminPlatformMacro",
    "title": "adminPlatformMacro",
    "name": "adminPlatformMacro",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminPlatformQueueList",
    "title": "adminPlatformQueueList",
    "name": "adminPlatformQueueList",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "",
    "url": "/authAdminLogin",
    "title": "authAdminLogin",
    "name": "authAdminLogin",
    "group": "admin",
    "description": "<p>performs authentication and returns an admin session id which can be used to make adminXXXXX calls.</purpose></p> <p>userid identifies a user (not a domain) within a specific account. A single user may have access to many partitions and many domains. There are for md5 or sha1 - it is a digest of hashtype(password+ts)several valid ways to write a user.  Each account is assigned a 20 character &quot;username&quot;, in addition there is a 10 digit sub-user called the &quot;luser&quot;.  the security administrator for every account is called &quot;admin&quot; and so the login for admin would be &quot;admin<em>username&quot; or simply &quot;username&quot; in addition if a domain.com is associated to an account then it is also allowed to login as admin@domain.com.  The same applies for luser which would simply be  luser</em>username or luser@domain.com.  Please note that login id&#39;s are NOT the same as email addresses, it is not possible to login with an email address unless the users email address also happens to be luser@domain.com (which would be configured by security administrator)</p> <p>authentication information (USERID, CLIENTID, DOMAIN, VERSION, AUTHTOKEN) can be passed in either of two ways - using HTTP Headers, or in the data payload. The following is a mapping of HTTP Header to payload parameter.   X-USERID = _userid, X-DOMAIN = _domain, X-VERSION = _version, X-CLIENTID = _clientid, X-DEVICEID = _deviceid, X-AUTHTOKEN = _authtoken.  Avoid using HTTP headers when making requests via the XHR XMLHTTPRequest from a browser, there are numerous compatibility issues with the CORS (Cross Origin Resource Sharing) specification 2119 so use the payload version instead. Ex: { &quot;_cmd&quot;:&quot;someThing&quot;, &quot;_clientid&quot;:&quot;your client id&quot;, &quot;_version&quot;:201249, } </p> <p>authAdminLogin calls do not require an authtoken (since they return it), depending on the circumstances the api may return a challenge  which complies with the supported challenge methods. The list of acceptable challenge methods is determined by comparing the allowed challenge  methods of the client (which were specified when the clientid was requested/assigned) and also the challenge types allowed by the administrator - if no mutually acceptable challenge types can be identified then an error is returned and access is denied.  Challenges are issued based on the accounts security administrator settings. </p> <p>authtype of md5|sha1 refers to the digest protocol being used (in all cases we will accept the hexadecimal notation) the authid is generated by computing the md5 or sha1 hexadecimal digest value of the concatenation of plain_text_password and ts . Given the following inputs password=&quot;A&quot;, ts=&quot;1B&quot; then it would be md5(&quot;A1B&quot;) or sha1(&quot;A1B&quot;) respectively. Both MD5 and SHA1 are widely implemented protocols and sufficiently secure for this exercise -  we have included the appropriate security tokens as generated by the md5 and sha1 functions in  mysql below (use these as a reference to test your own functions)</p> <p>mysql&gt; select md5(&#39;A1B&#39;); +----------------------------------+ | md5(&#39;A1B&#39;)                       | +----------------------------------+ | 9c8c7d6da17f5b90b9c2b8aa03812ab4 | +----------------------------------+</p> <p>mysql&gt; select sha1(&#39;A1B&#39;); +------------------------------------------+ | sha1(&#39;A1B&#39;)                              | +------------------------------------------+ | 7b6bfc9420addb09c8cfb1ae5f71f8e797d4685d | +------------------------------------------+</p> <p>The ts value of &quot;1B&quot; would not be valid, it should be a date in YYYYMMDDHHMMSS format.  The date must be within 60 seconds of the actual time or the request will be refused.  In addition the random security string is ONLY valid for one request within a 1 hour period.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "device_note",
            "description": ""
          },
          {
            "group": "Request",
            "type": "Timestamp",
            "optional": false,
            "field": "current",
            "description": "<p>timestamp YYYYMMDDHHMMSS</p> "
          },
          {
            "group": "Request",
            "type": "Enumeration",
            "optional": true,
            "field": "authtype",
            "description": "<p>md5|sha1|facebook|googleid|paypal</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "authid",
            "description": "<p>for md5 or sha1 - it is a digest of hashtype(password+ts)</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "authtoken",
            "description": "<p>secret user key</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "deviceid",
            "description": "<p>deviceid</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>userid</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "ts",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Using Headers",
          "content": "X-USERID: user@domain.com\nX-CLIENT: your.app.client.id\nX-VERSION: 201246\nX-DEVICEID: user_specified\nX-DOMAIN: domain.com\nContent-Type: application/json\n\n{ \"_cmd\":\"authAdminLogin\", \"ts\":\"YYYYMMDDHHMMSS or seconds since 1970\", \"authtype\":\"md5\", \"authid\"  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "authAdminLogout",
    "title": "authAdminLogout",
    "name": "authAdminLogout",
    "group": "admin",
    "description": "<p>destroy/invalidate an admin session.</p> <p>Does not need any parameters, destroys the current session (if any), always returns a success.</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "/authNewAccountCreate",
    "title": "authNewAccountCreate",
    "group": "admin",
    "name": "authNewAccountCreate",
    "description": "<p>establish a new anycommerce account (this data should be collected during the registration process) returns a valid token to the account</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": "<p>search string</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "verificationsms",
            "description": "<p>|voice</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "@RESULTS",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "ts",
            "description": "<p>timestamp</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>login@username</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "deviceid",
            "description": "<p>login@username</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "authtoken",
            "description": "<p>login@username</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "authPasswordRecover",
    "title": "authPasswordRecover",
    "name": "authPasswordRecover",
    "group": "admin",
    "description": "<p>employs the password recovery mechanism for the account (currently only email). a temporary password is created and emailed, up to 10 times in a 3 hour period.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "emailemail",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "/helpAPI",
    "title": "helpAPI",
    "group": "admin",
    "name": "helpAPI",
    "description": "<p>used to do in-app (user wiki) documentation lookups/searches.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": "<p>search string</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "@RESULTS",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request",
        "content": "\n{\n'@RESULTS':[\n\t[ 'docid':'doc1', 'score':'52.533', 'title':'title of document 1', 'summary':'plain text summary' ]\n\t[ 'docid':'doc2', 'score':'42.232', 'title':'title of document 2', 'summary':'plain text summary' ]\n\t]\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "/providerExec",
    "title": "providerExec",
    "group": "admin",
    "name": "providerExec",
    "examples": [
      {
        "title": "Not available ** EXPERIMENTAL **",
        "content": "Not available ** EXPERIMENTAL **",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "appInteractInternalMemCache",
    "title": "appInteractInternalMemCache",
    "group": "app",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app",
    "name": "PostAppinteractinternalmemcache"
  },
  {
    "type": "POST",
    "url": "appInteractInternalRedis",
    "title": "appInteractInternalRedis",
    "group": "app",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app",
    "name": "PostAppinteractinternalredis"
  },
  {
    "type": "POST",
    "url": "appMashUpFTP",
    "title": "appMashUpFTP",
    "group": "app",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app",
    "name": "PostAppmashupftp"
  },
  {
    "type": "POST",
    "url": "appMashUpHTTP",
    "title": "appMashUpHTTP",
    "group": "app",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app",
    "name": "PostAppmashuphttp"
  },
  {
    "type": "POST",
    "url": "appMashUpHTTPS",
    "title": "appMashUpHTTPS",
    "group": "app",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app",
    "name": "PostAppmashuphttps"
  },
  {
    "type": "POST",
    "url": "appMashUpMemCache",
    "title": "appMashUpMemCache",
    "group": "app",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app",
    "name": "PostAppmashupmemcache"
  },
  {
    "type": "POST",
    "url": "appMashUpRedis",
    "title": "appMashUpRedis",
    "group": "app",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app",
    "name": "PostAppmashupredis"
  },
  {
    "type": "POST",
    "url": "appMashUpSFTP",
    "title": "appMashUpSFTP",
    "group": "app",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app",
    "name": "PostAppmashupsftp"
  },
  {
    "type": "POST",
    "url": "appMashUpSQL",
    "title": "appMashUpSQL",
    "group": "app",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app",
    "name": "PostAppmashupsql"
  },
  {
    "type": "POST",
    "url": "appMashUpSMTP",
    "title": "appMashUpSMTP",
    "name": "appMashUpSMTP",
    "group": "app",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "permission.mashups/smtp-sample.json",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "sender",
            "description": "<p>&quot; optional=&quot;1</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "recipient",
            "description": "<p>&quot; optional=&quot;1</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>&quot; optional=&quot;1</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": ".mashups/smtp-sample.json",
        "content": "{\n\t\"call\":\"appMashUpSMTP\",\t\t\t/* required */\n\t\"call-limit-daily\":\"10\",\t\t/* recommended: max of 10 calls per day */\n\t\"call-limit-hourly\":\"2\",\t\t/* recommended: max of 2 calls per hour */\n\t\"min-version\":201338,\t\t\t/* recommended: minimum api version */\n\t\"max-version\":201346,\t\t\t/* recommended: maximum api version */\n\t\"@whitelist\":[\n\t\t/* the line below will force the sender to you@domain.com */\n\t\t{ \"id\":\"sender\",    \"verb\":\"set\", \"value\":\"you@domain.com\" },\n\t\t/* the line above will use the recipient provided in the app call */\n\t\t{ \"id\":\"recipient\", \"verb\":\"get\" },\n\t\t/* this is an optional parameter, provided by the app, defaulting to \"unknown\" */\n\t\t{ \"id\":\"eyecolor\",  \"verb\":\"get\", \"default\":\"unknown\" },\n\t\t/* the default behavior is \"verb\":\"get\" .. so this is basically whitelisting subject */\n\t\t{ \"id\":\"subject\"    },\n\t\t/* the body message, which will substitute %eyecolor% */\n\t\t{ \"id\":\"body\", \t  \"verb\":\"sub\", \"value\":\"Your eye color is: %eyecolor%\" }\n\t\t]\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appMashUpSQS",
    "title": "appMashUpSQS",
    "name": "appMashUpSQS",
    "group": "app",
    "description": "<p><purpose></purpose></p> <notes></notes>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "/configJS",
    "title": "configJS",
    "group": "site",
    "name": "configJS",
    "description": "<p>outputs a variety of useful information about a site.</p> ",
    "examples": [
      {
        "title": "Request",
        "content": "\nhttp:/www.domain.com/jsonapi/config.js",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "site"
  },
  {
    "type": "POST",
    "url": "/domainLookup",
    "title": "domainLookup",
    "group": "site",
    "name": "domainLookup_domainLookup",
    "description": "<p>Not available <strong> EXPERIMENTAL </strong></p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "site"
  },
  {
    "type": "POST",
    "url": "/loadPlatformJSON",
    "title": "loadPlatformJSON",
    "group": "site",
    "name": "loadPlatformJSON_loadPlatformJSON",
    "description": "<p>TODO</p> ",
    "success": {
      "examples": [
        {
          "title": "loadPlatformJSON Response",
          "content": "{\n\t\"_version\":201318,\n\t\"_start\":\"xyz\",\t\t\t// default starting position\n\t\"_inputs\":[\n\t   { \"required\":1,\"var\":\"email\",\"type\":\"text\",\"label\":\"Email\" },\n\t   { \"required\":1,\"var\":\"firstname\",\"type\":\"text\",\"label\":\"Purchasing Contact Firstname\" },\n\t   { \"required\":1,\"var\":\"lastname\",\"type\":\"text\",\"label\":\"Purchasing Contact Lastname\" },\n\n\t   { \"required\":1,\"var\":\"register_password\",\"type\":\"text\",\"label\":\"Registration Password\" },\n\t \n\t   // *** HOW TO OVERRIDE _start ***\n\t   // example1: variable starting points, user specified, no security, no validation.\n\t   { \"required\":0, \"type\":\"text\", \"var\":\"_start\", \"label\":\"This is a horrible idea.\" },\n\t \n\t   // example2: using plain text passwords (poor security) \n\t   // for 'match/plain' - we have two passwords \"TURTLE\" and \"LLAMA\", both use the same starting points 'start-insecure'\n\t   { \"required\":0, \"type\":\"match\", \"if\":\"register_password\", \"is\":\"TURTLE\", \"var\":\"_start\", \"value\":\"start-insecure\" },\n\t   { \"required\":0, \"type\":\"match\", \"if\":\"register_password\", \"is\":\"LLAMA\" , \"var\":\"_start\", \"value\":\"start-insecure\" },\n\t   \n\t   // example3: using md5 digest for best security\n\t   // for 'match-md5' - we will prepend the \"saltedby\" 'concatenateMe' with the users password \n\t\t// (which *MUST* not be stored in the file - but for this example it is 'KITTEN')\n\t   // the md5 digest for 'concatenateMeKITTEN' is c3b9ba2823f9c2ba02a4ee89f8ac4450\n\t   // since digests aren't reversible, they can be stored safely in public repos.\n\t   { \"required\":0, \"type\":\"match-md5\", \"if\":\"register_password\", \"saltedby\":\"concatenateMe\", \n\t\t\t\t\t\t\t\"is\":\"c3b9ba2823f9c2ba02a4ee89f8ac4450\", \"var\":\"_start\", \"value\":\"start-secure\" },\n\t   \n\t],\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "site"
  },
  {
    "type": "POST",
    "url": "/cryptTool",
    "title": "cryptTool",
    "group": "utility",
    "name": "cryptTool_cryptTool",
    "examples": [
      {
        "title": "Legacy Doc",
        "content": "<API id=\"cryptTool\">\n\n<input  id=\"verb\">make-key|make-csr|make-self-signed-crt</input>\n\n<input  if=\"verb:make-key\" id=\"length\" optional=\"1\">1024|2048|4096</input>\n<output if=\"verb:make-key\" id=\"key\">key text\n\n<input  if=\"verb:make-csr\" id=\"key\"></input>\n<input  if=\"verb:make-csr\" id=\"company\">any company, inc.</input>\n<input  if=\"verb:make-csr\" id=\"city\"></input>\n<input  if=\"verb:make-csr\" id=\"state\"></input>\n<input  if=\"verb:make-csr\" id=\"fqdn\">www.domain.com</input>\n<output if=\"verb:make-csr\" id=\"csr\">csr text\n\n<input  if=\"verb:make-self-signed-crt\" id=\"key\"></input>\n<input  if=\"verb:make-self-signed-crt\" id=\"csr\"></input>\n<output if=\"verb:make-self-signed-crt\" id=\"crt\">crt text",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "utility"
  }
] });