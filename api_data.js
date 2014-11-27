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