define({ api: [
  {
    "type": "",
    "url": "{}",
    "title": "API Usage",
    "name": "API_Usage",
    "group": "INTRODUCTION",
    "description": "<p>Parameters are passed back and forth using a json hash containing 3 critical elements:_uuid, _cartid, and either _cmd (for single commands) The API itself is designed to be asynchronous, however at this time only a synchronous responses are available. </p><p>*_uuid : a unique request id, this is passed back, and is used to identify duplicate requests.</p><ul><li>_cartid : the unique cart id (cart id) for this cart, you will receive this after making a request if you do not pass one, you must store this in the browser and pass it on subsequent requests.</li><li>_cmd : a complete list of commands is passed below.  If _cmd is used then parameters to _cmd are passed in the upper hash at the same level as _cmd.  If @cmds is used, then that is an array of hashes, each with their own &quot;_cmd&quot; - the example below includes <em>both usages</em>, however you will only need to use one:</li></ul>",
    "examples": [
      {
        "title": "{",
        "content": "{\n\"_uuid\" : 1234,\n\"_cartid\" : \"12345\",\n\"_cmd\" : \"cartItemsAdd\",\n\"_tag\" : \"some data you'd like returned\",\n\"_v\" : \"unique mvc/app id (used for debugging)\"\n}\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Error Handling",
    "name": "Error_Handling",
    "group": "INTRODUCTION",
    "description": "<table><thead><tr><th>ErrType</th><th>Cause</th></tr></thead><tbody><tr><td>youwarn</td><td>a warning, not really an error, should be displayed to user.</td></tr><tr><td>youerr</td><td>an error caused by the user (ex: data input), easily correctable</td></tr><tr><td>appwarn</td><td>a warning, should be logged to developer console</td></tr><tr><td>apperr</td><td>a developer error (probably not correctable by user), ex: data formatting -- this is something the app developer can fix.</td></tr><tr><td>apiwarn</td><td>an issue communicating with a third party, does not indicate success/fail</td></tr><tr><td>apierr</td><td>server error (probably not correctable by app), ex: facebook plugin did not work, site offline for maintenance, but usually an uncorrectable 3rd party error.</td></tr><tr><td>iseerr</td><td>backend error, reserved for application to handle &#39;server down&#39;, &#39;unreachable&#39; or otherwise &#39;invalid response format&#39; errors</td></tr><tr><td>cfgerr</td><td>configuration error (something in the server configuration prohibits or blocks the request)</td></tr></tbody></table><p>  Handling errors is <em>critical</em> to a well behaved application, since there are literally hundreds of things  which can go wrong at any one time.  With each command (_cmd) request the backend will return at a   minimum: &quot;rcmd&quot;, &quot;rid&quot;, and &quot;rmsg&quot;. </p><p>  The exact response format depends on how the request was made, if _cmd is used, then the response will   include &quot;rcmd&quot; in the response, if @cmds was used, then both a top level &quot;rcmd&quot; indicating   success/failure/ warnings of all commands, in addition to an array of hashes containing rcmds for  each individual request.</p><p>  It is important when working with @cmds that you still check &quot;rcmd&quot; before looking at responses in @rcmds because based on the rcmd (ex: &quot;ise&quot;) there may be no specific responses. </p><p>  <em>do not</em> check for the presence of &#39;errid&#39; to determine if an error occurred. if &#39;_rcmd&#39; had a warning  (such as old call parameters) then errid and errmsg may also be returned, even though the request had  actually succeeded.</p>",
    "examples": [
      {
        "title": "",
        "content": "test\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "",
    "url": "{}",
    "title": "Pipelined Requests",
    "name": "PipelinedRequests",
    "group": "INTRODUCTION",
    "examples": [
      {
        "title": "",
        "content": "{\n\"_cmd\" : \"pipeline\",\n\"@cmds\" : [\n { \"_cmd\" : \"\", .. other parameters .. }\n ],\n}\n",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "",
          "content": "{\n\"_rcmd\" : \"pipeline\",\n\"@rcmds\" : [\n}\n",
          "type": " \"_rcmd\" : \"\", .. other parameters .. "
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appMashUpSMTP",
    "title": "appMashUpSMTP",
    "name": "appMashUpSMTP",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "permission.mashups/smtp-sample.json",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "sender",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "recipient",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "subject",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "body",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": ".mashups/smtp-sample.json",
        "content": ".mashups/smtp-sample.json\n{\n\"call\":\"appMashUpSMTP\",\t\t\t/* required */\n\"call-limit-daily\":\"10\",\t\t/* recommended: max of 10 calls per day */\n\"call-limit-hourly\":\"2\",\t\t/* recommended: max of 2 calls per hour */\n\"min-version\":201338,\t\t\t/* recommended: minimum api version */\n\"max-version\":201346,\t\t\t/* recommended: maximum api version */\n\"@whitelist\":[\n\t/* the line below will force the sender to you@domain.com */\n\t{ \"id\":\"sender\",    \"verb\":\"set\", \"value\":\"you@domain.com\" },\n\t/* the line above will use the recipient provided in the app call */\n\t{ \"id\":\"recipient\", \"verb\":\"get\" },\n\t/* this is an optional parameter, provided by the app, defaulting to \"unknown\" */\n\t{ \"id\":\"eyecolor\",  \"verb\":\"get\", \"default\":\"unknown\" },\n\t/* the default behavior is \"verb\":\"get\" .. so this is basically whitelisting subject */\n\t{ \"id\":\"subject\"    },\n\t/* the body message, which will substitute %eyecolor% */\n\t{ \"id\":\"body\", \t  \"verb\":\"sub\", \"value\":\"Your eye color is: %eyecolor%\" }\n\t]\n}\n",
        "type": "json"
      }
    ],
    "group": "JSONAPI_pm",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appMashUpSQS",
    "title": "appMashUpSQS",
    "name": "appMashUpSQS",
    "group": "JSONAPI_pm",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "authAdminLogin",
    "title": "authAdminLogin",
    "name": "authAdminLogin",
    "description": "<p>Create a login session</p>",
    "group": "JSONAPI_pm",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "authAdminLogout",
    "title": "authAdminLogout",
    "name": "authAdminLogout",
    "description": "<p>destroy/invalidate an admin session.</p><p>Does not need any parameters, destroys the current session (if any), always returns a success.</p>",
    "group": "JSONAPI_pm",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appInteractInternalMemCache",
    "title": "appInteractInternalMemCache",
    "group": "JSONAPI_pm",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appMashUpSFTP",
    "title": " appMashUpSFTP",
    "group": "JSONAPI_pm",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appMashUpFTP",
    "title": "appMashUpFTP",
    "group": "JSONAPI_pm",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appInteractInternalRedis",
    "title": "appInteractInternalRedis",
    "group": "JSONAPI_pm",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appMashUpSQL",
    "title": "appMashUpSQL",
    "group": "JSONAPI_pm",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appMashUpHTTP",
    "title": "appMashUpHTTP",
    "group": "JSONAPI_pm",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appMashUpHTTPS",
    "title": "appMashUpHTTPS",
    "group": "JSONAPI_pm",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appMashUpMemCache",
    "title": "appMashUpMemCache",
    "group": "JSONAPI_pm",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appMashUpRedis",
    "title": "appMashUpRedis",
    "group": "JSONAPI_pm",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "/adminControlPanelAction",
    "title": "adminControlPanelAction",
    "group": "admin",
    "name": "adminControlPanelAction",
    "description": "<p>special functions to automate system level behaviors.<strong> EXPERIMENTAL (may change significantly in future versions) </strong></p><table><thead><tr><th>verb</th><th>explanation</th></tr></thead><tbody><tr><td>config-rebuild</td><td>rebuilds config file</td></tr><tr><td>uwsgi-restart</td><td>restart uwsgi server</td></tr><tr><td>nginx-restart</td><td>restart nginx server</td></tr></tbody></table>",
    "parameter": {
      "fields": {
        "Input": [
          {
            "group": "Input",
            "type": "String",
            "field": "verb",
            "optional": false,
            "description": "<p>see verb table</p>"
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
            "field": "contents",
            "optional": false,
            "description": "<p>output from operation</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPasswordUpdate",
    "title": "adminPasswordUpdate",
    "name": "adminPasswordUpdate",
    "group": "admin",
    "description": "<p>changes a users password</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "oldold",
            "optional": false,
            "description": "<p>password</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "newnew",
            "optional": false,
            "description": "<p>passowrd</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminSupplierCreate",
    "title": "adminSupplierCreate",
    "name": "adminSupplierCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminSupplierDetail",
    "title": "adminSupplierDetail",
    "name": "adminSupplierDetail",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "VENDORID6-8",
            "optional": false,
            "description": "<p>digit supplier/vendor id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminSupplierList",
    "title": "adminSupplierList",
    "name": "adminSupplierList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminSupplierMacro",
    "title": "adminSupplierMacro",
    "name": "adminSupplierMacro",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminSupplierOrderItemList",
    "title": "adminSupplierOrderItemList",
    "name": "adminSupplierOrderItemList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "FILTER",
            "optional": false,
            "description": "<p>OPEN</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminSupplierOrderList",
    "title": "adminSupplierOrderList",
    "name": "adminSupplierOrderList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "VENDORID6-8",
            "optional": false,
            "description": "<p>digit supplier/vendor id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "FILTER",
            "optional": false,
            "description": "<p>UNCONFIRMED|RECENT</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "DETAIL",
            "optional": false,
            "description": "<p>1|0 includes an optional @ORDERDETAIL in response</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "field": "@ORDERS",
            "optional": false,
            "description": "<p>detail about the vendor/supplier orders</p>"
          },
          {
            "group": "Response",
            "field": "@ORDERDETAIL",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminSupplierProductList",
    "title": "adminSupplierProductList",
    "name": "adminSupplierProductList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminSupplierRemove",
    "title": "adminSupplierRemove",
    "name": "adminSupplierRemove",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "VENDORID6-8",
            "optional": false,
            "description": "<p>digit supplier/vendor id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "products0",
            "optional": false,
            "description": "<p>|1</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "",
    "url": "/authAdminLogin",
    "title": "authAdminLogin",
    "group": "admin",
    "name": "authAdminLogin",
    "description": "<p>performs authentication and returns an admin session id which can be used to make adminXXXXX calls.</purpose></p><p>userid identifies a user (not a domain) within a specific account. A single user may have access to many partitions and many domains. There arefor md5 or sha1 - it is a digest of hashtype(password+ts)several valid ways to write a user.  Each account is assigned a 20 character &quot;username&quot;, in addition there is a 10 digit sub-user called the &quot;luser&quot;. the security administrator for every account is called &quot;admin&quot; and so the login for admin would be &quot;admin<em>username&quot; or simply &quot;username&quot; in additionif a domain.com is associated to an account then it is also allowed to login as admin@domain.com.  The same applies for luser which would simply be luser</em>username or luser@domain.com.  Please note that login id&#39;s are NOT the same as email addresses, it is not possible to login with an email addressunless the users email address also happens to be luser@domain.com (which would be configured by security administrator)</p><p>authentication information (USERID, CLIENTID, DOMAIN, VERSION, AUTHTOKEN) can be passed in either of two ways - using HTTP Headers, or in the data payload.The following is a mapping of HTTP Header to payload parameter.   X-USERID = _userid, X-DOMAIN = _domain, X-VERSION = _version, X-CLIENTID = _clientid,X-DEVICEID = _deviceid, X-AUTHTOKEN = _authtoken.  Avoid using HTTP headers when making requests via the XHR XMLHTTPRequest from a browser, there arenumerous compatibility issues with the CORS (Cross Origin Resource Sharing) specification 2119 so use the payload version instead. Ex:{ &quot;_cmd&quot;:&quot;someThing&quot;, &quot;_clientid&quot;:&quot;your client id&quot;, &quot;_version&quot;:201249, } </p><p>authAdminLogin calls do not require an authtoken (since they return it), depending on the circumstances the api may return a challenge which complies with the supported challenge methods. The list of acceptable challenge methods is determined by comparing the allowed challenge methods of the client (which were specified when the clientid was requested/assigned) and also the challenge types allowed by the administrator -if no mutually acceptable challenge types can be identified then an error is returned and access is denied.  Challenges are issued based on theaccounts security administrator settings. </p><p>authtype of md5|sha1 refers to the digest protocol being used (in all cases we will accept the hexadecimal notation)the authid is generated by computing the md5 or sha1 hexadecimal digest value of the concatenation of plain_text_password and ts .Given the following inputs password=&quot;A&quot;, ts=&quot;1B&quot; then it would be md5(&quot;A1B&quot;) or sha1(&quot;A1B&quot;) respectively.Both MD5 and SHA1 are widely implemented protocols and sufficiently secure for this exercise - we have included the appropriate security tokens as generated by the md5 and sha1 functions in mysql below (use these as a reference to test your own functions)</p><p>mysql&gt; select md5(&#39;A1B&#39;);+----------------------------------+| md5(&#39;A1B&#39;)                       |+----------------------------------+| 9c8c7d6da17f5b90b9c2b8aa03812ab4 |+----------------------------------+</p><p>mysql&gt; select sha1(&#39;A1B&#39;);+------------------------------------------+| sha1(&#39;A1B&#39;)                              |+------------------------------------------+| 7b6bfc9420addb09c8cfb1ae5f71f8e797d4685d |+------------------------------------------+</p><p>The ts value of &quot;1B&quot; would not be valid, it should be a date in YYYYMMDDHHMMSS format. The date must be within 60 seconds of the actual time or the request will be refused. In addition the random security string is ONLY valid for one request within a 1 hour period.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "device_note",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "Timestamp",
            "field": "current",
            "optional": false,
            "description": "<p>timestamp YYYYMMDDHHMMSS</p>"
          },
          {
            "group": "Request",
            "type": "Enumeration",
            "field": "authtype",
            "optional": true,
            "description": "<p>md5|sha1|facebook|googleid|paypal</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "authid",
            "optional": true,
            "description": "<p>for md5 or sha1 - it is a digest of hashtype(password+ts)</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "authtoken",
            "optional": false,
            "description": "<p>secret user key</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "deviceid",
            "optional": false,
            "description": "<p>deviceid</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "userid",
            "optional": false,
            "description": "<p>userid</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "ts",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "X-USERID: user@domain.com\nX-CLIENT: your.app.client.id\nX-VERSION: 201246\nX-DEVICEID: user_specified\nX-DOMAIN: domain.com\nContent-Type: application/json\n\n{ \"_cmd\":\"authAdminLogin\", \"ts\":\"YYYYMMDDHHMMSS or seconds since 1970\", \"authtype\":\"md5\", \"authid\"  }"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "/authNewAccountCreate",
    "title": "authNewAccountCreate",
    "group": "admin",
    "name": "authNewAccountCreate",
    "description": "<p>establish a new anycommerce account (this data should be collected during the registration process)returns a valid token to the account</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "keywords",
            "optional": false,
            "description": "<p>search string</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "domain",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "email",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "firstname",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "lastname",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "company",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "phone",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "verificationsms",
            "optional": false,
            "description": "<p>|voice</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Array",
            "field": "@RESULTS",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "ts",
            "optional": false,
            "description": "<p>timestamp</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "userid",
            "optional": false,
            "description": "<p>login@username</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "deviceid",
            "optional": false,
            "description": "<p>login@username</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "authtoken",
            "optional": false,
            "description": "<p>login@username</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "authPasswordRecover",
    "title": "authPasswordRecover",
    "name": "authPasswordRecover",
    "group": "admin",
    "description": "<p>employs the password recovery mechanism for the account (currently only email).a temporary password is created and emailed, up to 10 times in a 3 hour period.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "emailemail",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "/cryptTool",
    "title": "cryptTool",
    "group": "admin",
    "name": "cryptTool_cryptTool",
    "examples": [
      {
        "title": "Legacy Doc",
        "content": "Legacy Doc\n<API id=\"cryptTool\">\n<input  id=\"verb\">make-key|make-csr|make-self-signed-crt</input>\n<input  if=\"verb:make-key\" id=\"length\" optional=\"1\">1024|2048|4096</input>\n<output if=\"verb:make-key\" id=\"key\">key text</output>\n<input  if=\"verb:make-csr\" id=\"key\"></input>\n<input  if=\"verb:make-csr\" id=\"company\">any company, inc.</input>\n<input  if=\"verb:make-csr\" id=\"city\"></input>\n<input  if=\"verb:make-csr\" id=\"state\"></input>\n<input  if=\"verb:make-csr\" id=\"fqdn\">www.domain.com</input>\n<output if=\"verb:make-csr\" id=\"csr\">csr text</output>\n<input  if=\"verb:make-self-signed-crt\" id=\"key\"></input>\n<input  if=\"verb:make-self-signed-crt\" id=\"csr\"></input>\n<output if=\"verb:make-self-signed-crt\" id=\"crt\">crt text</output>\n</API>\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "/domainLookup",
    "title": "domainLookup",
    "group": "admin",
    "name": "domainLookup_domainLookup",
    "description": "<p>Not available <strong> EXPERIMENTAL </strong></p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "/helpAPI",
    "title": "helpAPI",
    "group": "admin",
    "name": "helpAPI",
    "description": "<p>used to do in-app (user wiki) documentation lookups/searches.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "keywords",
            "optional": false,
            "description": "<p>search string</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Array",
            "field": "@RESULTS",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request",
        "content": "Request\n{\n'@RESULTS':[\n[ 'docid':'doc1', 'score':'52.533', 'title':'title of document 1', 'summary':'plain text summary' ]\n[ 'docid':'doc2', 'score':'42.232', 'title':'title of document 2', 'summary':'plain text summary' ]\n]\n}\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "/loadPlatformJSON",
    "title": "loadPlatformJSON",
    "group": "admin",
    "name": "loadPlatformJSON_loadPlatformJSON",
    "description": "<p>TODO</p>",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "Response\n{\n\"_version\":201318,\n\"_start\":\"xyz\",\t\t\t// default starting position\n\"_inputs\":[\n   { \"required\":1,\"var\":\"email\",\"type\":\"text\",\"label\":\"Email\" },\n   { \"required\":1,\"var\":\"firstname\",\"type\":\"text\",\"label\":\"Purchasing Contact Firstname\" },\n   { \"required\":1,\"var\":\"lastname\",\"type\":\"text\",\"label\":\"Purchasing Contact Lastname\" },\n\t   { \"required\":1,\"var\":\"register_password\",\"type\":\"text\",\"label\":\"Registration Password\" },\n \n   // *** HOW TO OVERRIDE _start ***\n   // example1: variable starting points, user specified, no security, no validation.\n   { \"required\":0, \"type\":\"text\", \"var\":\"_start\", \"label\":\"This is a horrible idea.\" },\n \n   // example2: using plain text passwords (poor security) \n   // for 'match/plain' - we have two passwords \"TURTLE\" and \"LLAMA\", both use the same starting points 'start-insecure'\n   { \"required\":0, \"type\":\"match\", \"if\":\"register_password\", \"is\":\"TURTLE\", \"var\":\"_start\", \"value\":\"start-insecure\" },\n   { \"required\":0, \"type\":\"match\", \"if\":\"register_password\", \"is\":\"LLAMA\" , \"var\":\"_start\", \"value\":\"start-insecure\" },\n   \n   // example3: using md5 digest for best security\n   // for 'match-md5' - we will prepend the \"saltedby\" 'concatenateMe' with the users password \n\t// (which *MUST* not be stored in the file - but for this example it is 'KITTEN')\n   // the md5 digest for 'concatenateMeKITTEN' is c3b9ba2823f9c2ba02a4ee89f8ac4450\n   // since digests aren't reversible, they can be stored safely in public repos.\n   { \"required\":0, \"type\":\"match-md5\", \"if\":\"register_password\", \"saltedby\":\"concatenateMe\", \n\t\t\t\t\t\t\"is\":\"c3b9ba2823f9c2ba02a4ee89f8ac4450\", \"var\":\"_start\", \"value\":\"start-secure\" },\n   \n],\n}\n",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
        "content": "Not available ** EXPERIMENTAL **\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminNavTreeList",
    "title": "adminNavTreeList",
    "name": "adminNavTreeList",
    "group": "other_<output_id=\"@NAVS\">_a_list_of_nav_elements_[_{_\"type\":\"navcat\",_\"prt\":\"0\",_\"nav\":\"PRT000\",_\"title\":\"Partition_0\"_},_{_\"type\":\"navcat\",_\"prt\":\"1\",_\"nav\":\"PRT001\",_\"title\":\"Partition_1\"_},_]_</output>_</API>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminDataQuery",
    "title": "adminDataQuery",
    "name": "adminDataQuery",
    "group": "other",
    "description": "<p>accesses local management database for a variety of fields/reports</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "query",
            "optional": false,
            "description": "<pre><code>listing-active,listing-active-fixed,listing-active-store,listing-active-auction,listing-all,listing-allwattempts,event-warnings,event-success,event-pending,event-target-powr.auction,event-target-ebay.auction,event-target-ebay.fixed</code></pre>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "since_gmtepoch",
            "optional": false,
            "description": "<p>timestamp - returns all data since that time</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "batchidbatchid",
            "optional": false,
            "description": "<p>(only valid with event- requests)</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@HEADER",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@ROWS",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminImageDelete",
    "title": "adminImageDelete",
    "name": "adminImageDelete",
    "group": "other",
    "description": "<p>deletes an image</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "filefilename",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "folderfolder",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminImageDetail",
    "title": "adminImageDetail",
    "name": "adminImageDetail",
    "group": "other",
    "description": "<p>returns stored details about an media library image file.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "file",
            "optional": false,
            "description": "<p>filename of the image ex: path/to/image.jpg</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "FILENAME",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "EXT",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "H",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "W",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "SIZE",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "TS",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "FID",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminImageFolderCreate",
    "title": "adminImageFolderCreate",
    "name": "adminImageFolderCreate",
    "group": "other",
    "description": "<p>creates a new folder in the media library, folder names must be in lower case.</purpose></p><p>you can call these in any order, subpaths will be created.</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "folder",
            "optional": false,
            "description": "<p>DIR1|DIR2</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "fid",
            "optional": false,
            "description": "<p>the internal folder id#</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>the name the folder was created</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "<Category FID=\"1234\" Name=\"\"/>"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminImageFolderDelete",
    "title": "adminImageFolderDelete",
    "name": "adminImageFolderDelete",
    "group": "other",
    "description": "<p>request the deletion of a category (do not implement this right now)</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "folder",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminImageFolderList",
    "title": "adminImageFolderList",
    "name": "adminImageFolderList",
    "group": "other",
    "description": "<p>returns a list of image categories and timestamps for each category</purpose></p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@folders",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "<Folder ImageCount=\"5\" TS=\"123\" Name=\"Path1\" FID=\"1\" ParentFID=\"0\" ParentName=\"|\"/>\n<Folder ImageCount=\"2\" TS=\"456\" Name=\"Path1b\" FID=\"2\" ParentFID=\"1\" ParentName=\"|Path1\"/>\n<Folder ImageCount=\"1\" TS=\"567\" Name=\"Path1bI\" FID=\"3\" ParentFID=\"2\" ParentName=\"|Path1|Pathb\"/>\n<Folder ImageCount=\"0\" TS=\"789\" Name=\"Path2\" FID=\"4\" ParentFID=\"0\" ParentName=\"|\"/>"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminImageList",
    "title": "adminImageList",
    "name": "adminImageList",
    "group": "other",
    "description": "<p>returns the list of images for a given folder (if specified).</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "folderfolder",
            "optional": false,
            "description": "<p>to view</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "reindexif",
            "optional": false,
            "description": "<p>a folder is requested, this will reindex the current folder</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "keywordkeyword",
            "optional": false,
            "description": "<p>(uses case insensitive substring)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "orderbyNONE",
            "optional": false,
            "description": "<p>|TS|TS_DESC|NAME|NAME_DESC|DISKSIZE|DISKSIZE_DESC|PIXEL|PIXEL_DESC</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "detailNONE",
            "optional": false,
            "description": "<p>|FOLDER</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@images",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "<Image Name=\"abc\" TS=\"1234\" Format=\"jpg\" />\n<Image Name=\"abc2\" TS=\"1234\" Format=\"jpg\" />\n<Image Name=\"abc3\" TS=\"1234\" Format=\"jpg\" />\n<Image Name=\"abc4\" TS=\"1234\" Format=\"jpg\" />\n<Image Name=\"abc5\" TS=\"1234\" Format=\"jpg\" />"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminImageUpload",
    "title": "adminImageUpload",
    "name": "adminImageUpload",
    "group": "other",
    "description": "<p>uses the file upload api to link a fileguid into a media library directory.</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "folderfolder",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "filename",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "base64base64",
            "optional": true,
            "description": "<p>encoded image data</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "fileguid",
            "optional": true,
            "description": "<p>fileguid (from file upload)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminNavcatCreate",
    "title": "adminNavcatCreate",
    "name": "adminNavcatCreate",
    "group": "other",
    "description": "<p>Creates a new navigation category or product list with a given pretty name.</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "prettynew",
            "optional": false,
            "description": "<p>name for category</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "root.root.category",
            "optional": false,
            "description": "<p>(set to $ for list)</API></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminNavcatDelete",
    "title": "adminNavcatDelete",
    "name": "adminNavcatDelete",
    "group": "other",
    "description": "<p>permanently removes a navigation category or list.</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "path.safe.name",
            "optional": false,
            "description": "<p>or path:$listname</API></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminNavcatModify",
    "title": "adminNavcatModify",
    "name": "adminNavcatModify",
    "group": "other",
    "description": "<p>changes the pretty name of a navigation category or list</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "path.safe.name",
            "optional": false,
            "description": "<p>or path:$listname</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "prettynew",
            "optional": false,
            "description": "<p>name for category</p><p><hint>will support %meta tags in the future.</hint></API></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminNavcatProductDelete",
    "title": "adminNavcatProductDelete",
    "name": "adminNavcatProductDelete",
    "group": "other",
    "description": "<p>removes a single product from a navigation category or list.</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "path.root.category",
            "optional": false,
            "description": "<p>or $list</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "pidpid1",
            "optional": false,
            "description": "<p></API></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminNavcatProductInsert",
    "title": "adminNavcatProductInsert",
    "name": "adminNavcatProductInsert",
    "group": "other",
    "description": "<p>adds a single product to a navigation category or list.</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "path.root.category",
            "optional": false,
            "description": "<p>or $list</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "pidpid1",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "position",
            "optional": false,
            "description": "<h1 id=\"-0-first-element-in-the-list-1-last-element-in-the-list-\">(0=first element in the list, -1=last element in the list)</h1><p></API></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminOrderDetail",
    "title": "adminOrderDetail",
    "name": "adminOrderDetail",
    "group": "other",
    "description": "<p>provides a full dump of data inside an order</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": "<p>admin session id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "orderi",
            "optional": false,
            "description": "<p>Order ID</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "order",
            "optional": false,
            "description": "<p>a json representation of an order (exact fields depend on version/order source)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminOrderDetail",
    "title": "adminOrderDetail",
    "name": "adminOrderDetail",
    "group": "other",
    "description": "<p>provides a full dump of data inside an order</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": "<p>admin session id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "orderid",
            "optional": false,
            "description": "<p>Order ID</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "order",
            "optional": false,
            "description": "<p>a json representation of an order (exact fields depend on version/order source)</API></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminOrderPaymentAction",
    "title": "adminOrderPaymentAction",
    "name": "adminOrderPaymentAction",
    "group": "other",
    "description": "<p>interally runs the PAYMENTACTION orderUpdate Macro, but can be called as a separate API</purpose></p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "orderid",
            "optional": false,
            "description": "<p>2011-01-1234</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "payment",
            "optional": false,
            "description": "<p></API></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPlatformHealth",
    "title": "adminPlatformHealth",
    "name": "adminPlatformHealth",
    "group": "other",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPlatformLogDownload",
    "title": "adminPlatformLogDownload",
    "name": "adminPlatformLogDownload",
    "group": "other",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "GUID",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPlatformLogList",
    "title": "adminPlatformLogList",
    "name": "adminPlatformLogList",
    "group": "other",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPlatformMacro",
    "title": "adminPlatformMacro",
    "name": "adminPlatformMacro",
    "group": "other",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPlatformQueueList",
    "title": "adminPlatformQueueList",
    "name": "adminPlatformQueueList",
    "group": "other",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPrivateFileList",
    "title": "adminPrivateFileList",
    "name": "adminPrivateFileList",
    "group": "other",
    "description": "<p></purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "GUID",
            "optional": false,
            "description": "<p></API></p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "onal",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>id=&quot;type</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProductList",
    "title": "adminProductList",
    "name": "adminProductList",
    "group": "other",
    "description": "<p>accesses the product database to return a specific hardcoded list of products</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CREATED_BEFOREmodified",
            "optional": false,
            "description": "<p>since timestamp</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "CREATED_SINCEmodified",
            "optional": false,
            "description": "<p>since timestamp</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SUPPLIERsupplier",
            "optional": false,
            "description": "<p>id</p><p><hint>indexed attributes: zoovy:prod_id,zoovy:prod_name,zoovy:prod_supplierid,  zoovy:prod_salesrank, zoovy:prod_mfgid,zoovy:prod_upc, zoovy:profile</hint></API></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProductSelectorDetail",
    "title": "adminProductSelectorDetail",
    "name": "adminProductSelectorDetail",
    "group": "other",
    "description": "<p>a product selector is a relative pointer to a grouping of products.</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "selector",
            "optional": false,
            "description": "<p>NAVCAT=.safe.pathNAVCAT=$listCSV=pid1,pid2,pid3CREATED=YYYYMMDD|YYYYMMDDRANGE=pid1|pid2MANAGECAT=/path/to/categorySEARCH=saerchtermPROFILE=xyzSUPPLIER=xyzMFG=xyxALL=your_base_are_belong_to_us</p><p><output id=\"@products\">an array of product id&#39;s</output></API></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "/configJS",
    "title": "configJS",
    "group": "site",
    "name": "configJS",
    "description": "<p>outputs a variety of useful information about a site.</p>",
    "examples": [
      {
        "title": "Request",
        "content": "Request\nhttp:/www.domain.com/jsonapi/config.js\n",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  }
] });