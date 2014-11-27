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
    "name": "adminCIAgentZipDownload",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "group": "_core_lib_JSONAPI_pm",
    "groupTitle": "_core_lib_JSONAPI_pm"
  },
  {
    "name": "adminCampaignZipDownload",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "group": "_core_lib_JSONAPI_pm",
    "groupTitle": "_core_lib_JSONAPI_pm"
  },
  {
    "name": "adminEBAYProfileZipDownload",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "group": "_core_lib_JSONAPI_pm",
    "groupTitle": "_core_lib_JSONAPI_pm"
  },
  {
    "name": "adminFileContents",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "group": "_core_lib_JSONAPI_pm",
    "groupTitle": "_core_lib_JSONAPI_pm"
  },
  {
    "name": "adminFileSave",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "group": "_core_lib_JSONAPI_pm",
    "groupTitle": "_core_lib_JSONAPI_pm"
  },
  {
    "name": "adminFileUpload",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "group": "_core_lib_JSONAPI_pm",
    "groupTitle": "_core_lib_JSONAPI_pm"
  },
  {
    "name": "adminSiteZipDownload",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "group": "_core_lib_JSONAPI_pm",
    "groupTitle": "_core_lib_JSONAPI_pm"
  },
  {
    "name": "adminZipDownload",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "group": "_core_lib_JSONAPI_pm",
    "groupTitle": "_core_lib_JSONAPI_pm"
  },
  {
    "type": "POST",
    "url": "API:",
    "title": "adminOrderReserve API: adminOrderReserve",
    "name": "API__adminOrderReserve",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@RESERVED",
            "description": "<p>returns an array, a list of order #&#39;s</p> "
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
    "url": "adminWalletList",
    "title": "",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "methodCHANGED",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<h2 id=\"-\">#</h2> <p><example>&lt;![CDATA[</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin",
    "name": "PostAdminwalletlist"
  },
  {
    "type": "POST",
    "url": "adminAccountDetail",
    "title": "adminAccountDetail",
    "name": "adminAccountDetail",
    "group": "admin",
    "description": "<p>Generates a new securekey for a given client. You must be given a client code by Zoovy to use this.TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminAffiliateCreate",
    "title": "adminAffiliateCreate",
    "name": "adminAffiliateCreate",
    "group": "admin",
    "description": "<p>TODO Not finished</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminAffiliateDetail",
    "title": "adminAffiliateDetail",
    "name": "adminAffiliateDetail",
    "group": "admin",
    "description": "<p>TODO Not finished</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminAffiliateList",
    "title": "adminAffiliateList",
    "name": "adminAffiliateList",
    "group": "admin",
    "description": "<p>returns a list of projectsTODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminAffiliateRemove",
    "title": "adminAffiliateRemove",
    "name": "adminAffiliateRemove",
    "group": "admin",
    "description": "<p>TODO Not finished</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminAffiliateUpdate",
    "title": "adminAffiliateUpdate",
    "name": "adminAffiliateUpdate",
    "group": "admin",
    "description": "<p>TODO Not finished</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminAppTicketCreate",
    "title": "adminAppTicketCreate",
    "name": "adminAppTicketCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminAppTicketDetail",
    "title": "adminAppTicketDetail",
    "name": "adminAppTicketDetail",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminAppTicketList",
    "title": "adminAppTicketList",
    "name": "adminAppTicketList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminAppTicketMacro",
    "title": "adminAppTicketMacro",
    "name": "adminAppTicketMacro",
    "group": "admin",
    "description": "<p>TODO</p> <ul> <li>ADDNOTE?note=xyz&amp;private=1|0</li> <li>ASK?</li> <li>UPDATE?escalate=1|0&amp;class=PRESALE|POSTSALE|EXCHANGE|RETURN</li> <li>CLOSE</li> </ul> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminAppTicketRemove",
    "title": "adminAppTicketRemove",
    "name": "adminAppTicketRemove",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminAppTicketSearch",
    "title": "adminAppTicketSearch",
    "name": "adminAppTicketSearch",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "onal",
            "defaultValue": "1",
            "description": "<p>id=&quot;lookupany string</p> "
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
    "url": "adminBatchJobCleanup",
    "title": "adminBatchJobCleanup",
    "name": "adminBatchJobCleanup",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminBatchJobCreate",
    "title": "adminBatchJobCreate",
    "name": "adminBatchJobCreate",
    "group": "admin",
    "description": "<p>TODO guid:(optional) type: SYNDICATION|REPORT|UTILITY,etc. %vars: { variables based on type }</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminBatchJobDownload",
    "title": "adminBatchJobDownload",
    "name": "adminBatchJobDownload",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "GUID",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "base64",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "FILENAME",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "MIME",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body",
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
    "url": "adminBatchJobList",
    "title": "adminBatchJobList",
    "name": "adminBatchJobList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@JOBS",
            "description": "<p>type:job, id:####, guid:(guid), status:, title:</p> "
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
    "url": "adminBatchJobParametersCreate",
    "title": "adminBatchJobParametersCreate",
    "name": "adminBatchJobParametersCreate",
    "group": "admin",
    "description": "<p>TODO UUID:(optional) TITLE:  BATCH_EXEC:  %vars: { variables based on type } PRIVATE : 1|0 (will only appear in list for this user)</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminBatchJobParametersList",
    "title": "adminBatchJobParametersList",
    "name": "adminBatchJobParametersList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "BATCH_EXEC",
            "description": "<p>&quot; value=&quot;</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@PARAMETERS",
            "description": "<p>[ { UUID:&quot;&quot;, TITLE:&quot;&quot;, BATCH_EXEC:&quot;&quot;, LASTRUN_TS:&quot;&quot;, LASTJOB_ID:&quot;&quot;, PRIVATE:1  } ]</p> "
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
    "url": "adminBatchJobParametersRemove",
    "title": "adminBatchJobParametersRemove",
    "name": "adminBatchJobParametersRemove",
    "group": "admin",
    "description": "<p>TODO UUID:(optional)</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminBatchJobStatus",
    "title": "adminBatchJobStatus",
    "name": "adminBatchJobStatus",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminBlastMacroCreate",
    "title": "adminBlastMacroCreate",
    "name": "adminBlastMacroCreate",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MSGID",
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
    "url": "adminBlastMacroList",
    "title": "adminBlastMacroList",
    "name": "adminBlastMacroList",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "custom",
            "description": "<p>set to zero to exclude custom macros</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "system",
            "description": "<p>set to zero to exclude system macros (note: if a CUSTOM macro has been created with the same name it will NOT appear in the system list)</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@MACROS",
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
    "url": "adminBlastMacroPropertyDetail",
    "title": "adminBlastMacroPropertyDetail",
    "name": "adminBlastMacroPropertyDetail",
    "group": "admin",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "%PRT",
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
    "url": "adminBlastMacroPropertyUpdate",
    "title": "adminBlastMacroPropertyUpdate",
    "name": "adminBlastMacroPropertyUpdate",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "%PRT.PHONE",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "%PRT.DOMAIN",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "%PRT.MAILADDR",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "%PRT.EMAIL",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "%PRT.LINKSYNTAXAPP",
            "description": "<p>|VSTORE</p> "
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
    "url": "adminBlastMacroRemove",
    "title": "adminBlastMacroRemove",
    "name": "adminBlastMacroRemove",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MSGID",
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
    "url": "adminBlastMacroUpdate",
    "title": "adminBlastMacroUpdate",
    "name": "adminBlastMacroUpdate",
    "group": "admin",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@MSGS",
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
    "url": "adminBlastMacroUpdate",
    "title": "adminBlastMacroUpdate",
    "name": "adminBlastMacroUpdate",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MSGID",
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
    "url": "adminBlastMsgCreate",
    "title": "adminBlastMsgCreate",
    "name": "adminBlastMsgCreate",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MSGID",
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
    "url": "adminBlastMsgDetail",
    "title": "adminBlastMsgDetail",
    "name": "adminBlastMsgDetail",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MSGID",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "%MSG",
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
    "url": "adminBlastMsgList",
    "title": "adminBlastMsgList",
    "name": "adminBlastMsgList",
    "group": "admin",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@MSGS",
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
    "url": "adminBlastMsgRemove",
    "title": "adminBlastMsgRemove",
    "name": "adminBlastMsgRemove",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MSGID",
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
    "url": "adminBlastMsgSend",
    "title": "adminBlastMsgSend",
    "name": "adminBlastMsgSend",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "FORMAT",
            "description": "<p>HTML5|LEGACY</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MSGID",
            "description": "<p>ORDER.CREATED</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RECIEVER",
            "description": "<p>EMAIL|CUSTOMER|GCN|APNS|ADN</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "EMAIL",
            "description": "<p>only needed if RECIPIENT=EMAILuser@domain.com</p> "
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
    "url": "adminBlastMsgUpdate",
    "title": "adminBlastMsgUpdate",
    "name": "adminBlastMsgUpdate",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MSGID",
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
    "url": "adminCIEngineAgentCreate",
    "title": "adminCIEngineAgentCreate",
    "name": "adminCIEngineAgentCreate",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "NAME",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "GUID",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SCRIPT",
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
    "url": "adminCIEngineAgentDetail",
    "title": "adminCIEngineAgentDetail",
    "name": "adminCIEngineAgentDetail",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminCIEngineAgentList",
    "title": "adminCIEngineAgentList",
    "name": "adminCIEngineAgentList",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminCIEngineAgentRemove",
    "title": "adminCIEngineAgentRemove",
    "name": "adminCIEngineAgentRemove",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminCIEngineAgentUpdate",
    "title": "adminCIEngineAgentUpdate",
    "name": "adminCIEngineAgentUpdate",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "NAME",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "GUID",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SCRIPT",
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
    "url": "adminCIEngineConfig",
    "title": "adminCIEngineConfig",
    "name": "adminCIEngineConfig",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminCIEngineLogSearch",
    "title": "adminCIEngineLogSearch",
    "name": "adminCIEngineLogSearch",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminCIEngineMacro",
    "title": "adminCIEngineMacro",
    "name": "adminCIEngineMacro",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminCSRLookup",
    "title": "adminCSRLookup",
    "name": "adminCSRLookup",
    "group": "admin",
    "description": "<p>Lookups a 4-6 digit codeTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "csr",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "cartid",
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
    "url": "adminCSVExport",
    "title": "adminCSVExport",
    "name": "adminCSVExport",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "exportCATEGORY",
            "description": "<p>|REWRITES</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "lines",
            "description": "<h1 id=\"of-lines-in-the-file\">of lines in the file</h1> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "base64base64",
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
    "url": "adminCSVImport",
    "title": "adminCSVImport",
    "name": "adminCSVImport",
    "group": "admin",
    "description": "<p>&lt;![CDATA[ This is a wrapper around the CSV file import available in the user interface. Creates an import batch job. Filetype may be one of the following:</p> <ul> <li>PRODUCT</li> <li>INVENTORY</li> <li>CUSTOMER</li> <li>ORDER</li> <li>CATEGORY</li> <li>REVIEW</li> <li>REWRITES</li> <li>RULES</li> <li>LISTINGS</li> </ul> <p>]]&gt;TODO</p> <hint> The file type may also be overridden in the header. See the CSV import documentation for current descriptions of the file.  </hint>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "filetype",
            "description": "<p>PRODUCT|INVENTORY|CUSTOMER|ORDER|CATEGORY|REVIEW|REWRITES|RULES|LISTINGS</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "fileguid",
            "description": "<p>(required if base64 not set) guid from fileupload</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "base64",
            "description": "<p>(required if fileguid not set) base64 encoded payload</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "headers",
            "description": "<p>any specific headers for the file import</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "JOBID",
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
    "url": "adminCampaign",
    "title": "adminCampaign",
    "name": "adminCampaign",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminCampaign",
    "title": "adminCampaign",
    "name": "adminCampaign",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminCampaignAvailableCoupons",
    "title": "adminCampaignAvailableCoupons",
    "name": "adminCampaignAvailableCoupons",
    "group": "admin",
    "description": "<p>a campaign can be associated with a couponTODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@COUPONS",
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
    "url": "adminCampaignCreate",
    "title": "adminCampaignCreate",
    "name": "adminCampaignCreate",
    "group": "admin",
    "description": "<p>Creates a new campaignTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CAMPAIGNID",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "TITLE",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SEND_EMAIL1",
            "description": "<p>|0</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SEND_APPLEIOS1",
            "description": "<p>|0</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SEND_ANDROID1",
            "description": "<p>|0</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SEND_FACEBOOK1",
            "description": "<p>|0</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SEND_TWITTER1",
            "description": "<p>|0</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SEND_SMS1",
            "description": "<p>|0</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "QUEUEMODEFRONT",
            "description": "<p>|BACK|OVERWRITE</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "EXPIRESYYYYMMDD",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "COUPONCODE",
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
    "url": "adminCampaignDetail",
    "title": "adminCampaignDetail",
    "name": "adminCampaignDetail",
    "group": "admin",
    "description": "<p>returns a campaign object in %CAMPAIGNTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CAMPAIGNID",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "%CAMPAIGN",
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
    "url": "adminCampaignMacro",
    "title": "adminCampaignMacro",
    "name": "adminCampaignMacro",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CPG",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@updates",
            "description": "<ul> <li>CPGCOPY</li> <li>CPGTEST?</li> <li>CPGSTART?STARTTS=timestamp</li> <li>CPGSTOP?</li> <li>SUBADD?email=</li> <li>SUBDEL?email=</li> </ul> "
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
    "url": "adminCampaignRemove",
    "title": "adminCampaignRemove",
    "name": "adminCampaignRemove",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CAMPAIGNIDcampaign",
            "description": "<p>id#</p> "
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
    "url": "adminCampaignUpdate",
    "title": "adminCampaignUpdate",
    "name": "adminCampaignUpdate",
    "group": "admin",
    "description": "<p>see adminCampaignCreate for parametersTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CPGcampaign",
            "description": "<p>id#</p> "
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
    "url": "adminConfigDetail",
    "title": "adminConfigDetail",
    "name": "adminConfigDetail",
    "group": "admin",
    "description": "<p>to obtain detail on a configuration objectTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": "<p>include %ORDER in response (contains current order sequence #)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "wms",
            "description": "<p>include %WMS in response</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "plugins",
            "description": "<p>include @PLUGINS in response</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "erp",
            "description": "<p>include %ERP in response</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "inv",
            "description": "<p>include %INVENTORY in response</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "prts",
            "description": "<p>include @PRTS in response</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "payments",
            "description": "<p>include @PAYMENTS in response</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "shipping",
            "description": "<p>include %SHIPPING in response</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "shipmethods",
            "description": "<p>include @SHIPMENTS in response</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "blast",
            "description": "<p>include %BLAST in response</p> "
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
    "url": "adminConfigMacro",
    "title": "adminConfigMacro",
    "name": "adminConfigMacro",
    "group": "admin",
    "description": "<p>to create/update/delete/modify (via macro) a configuration object</p> <ul> <li>PLUGIN/SET?plugin=domain.com</li> <li>PLUGIN/DATATABLE-(INSERT|EMPTY|REMOVE)?plugin=domain.com&amp;id=</li> <li>BLAST/SET?from_email=</li> <li>GLOBAL/WMS?active=1|0</li> <li>GLOBAL/ERP?active=1|0</li> <li>GLOBAL/ORDERID?start=####</li> <li>GLOBAL/ACCOUNT?</li> <li>GLOBAL/FLEXEDIT-SAVE?json=</li> <li>GLOBAL/FLEXEDIT-FIELD-SET?attrib=xyz&amp;json=</li> <li>GLOBAL/SITE-FIX         (not finished)</li> <li>GLOBAL/ADD-RESERVED-DOMAIN?</li> <li>GLOBAL/SEARCH?SYNONYMS=&amp;STOPWORDS=&amp;CHARACTERMAP=</li> <li>GLOBAL/PARTITIONCREATE?name=&amp;domain=&amp;navcats=</li> <li>GLOBAL/INVENTORY?inv_mode=1|3&amp;inv_website_remove=1|0</li> <li>NOTIFICATION/DATATABLE-EMPTY?event=ENQUIRY.ORDER</li> <li>NOTIFICATION/DATATABLE-INSERT?event=ENQUIRY.ORDER</li> <li>CRM-CONFIG?ticket_number=&amp;sequence=&amp;email_cleanup&amp;email=</li> <li>TAXRULES/EMPTY?tax_rules=</li> <li>TAXRULES/INSERT?type=&amp;state=&amp;city=&amp;zipspan=&amp;zip4=&amp;country=&amp;intprovince=&amp;intzip=&amp;rate=&amp;zone=&amp;expires=</li> <li>COUPON/INSERT?coupon=&amp;begins=YYYYMMDDHHMMSS&amp;expires=YYYYMMDDHHMMSS&amp;taxable=&amp;stackable=&amp;disabled=&amp;limiteduse=&amp;title=&amp;image=</li> <li>COUPON/UPDATE?coupon=&amp;begins=YYYYMMDDHHMMSS&amp;expires=YYYYMMDDHHMMSS&amp;taxable=&amp;stackable=&amp;disabled=&amp;limiteduse=&amp;title=&amp;image=</li> <li>COUPON/REMOVE?coupon=</li> <li>PROMOTIONS?promotion_advanced=0|1</li> <li>COUPON/RULESTABLE-EMPTY?coupon=</li> <li>COUPON/RULESTABLE-REMOVE?coupon=</li> <li>COUPON/RULESTABLE-MOVEUP?coupon=&amp;ID=</li> <li>COUPON/RULESTABLE-MOVEDOWN?coupon=&amp;ID=</li> <li>COUPON/RULESTABLE-INSERT?coupon=&amp;match=&amp;name=&amp;filter=&amp;exec=&amp;value=&amp;weight=&amp;matchvalue</li> <li>SHIPPING/CONFIG?ship_origin=zip&amp;chkout_deny_ship_po&amp;ship_int_risk=&amp;ship_latency=&amp;ship_cutoff&amp;ship_blacklist=isox,isox,isox&amp;banned=type|match|ts\\ntype|match|ts</li> <li>SHIPPING/BANNEDTABLE-EMPTY</li> <li>SHIPPING/BANNEDTABLE-INSERT?type=&amp;match=&amp;created=</li> <li>SHIPMETHOD/FEDEX-REGISTER?account=&amp;address1=&amp;address2=&amp;city=&amp;state=&amp;zip=&amp;country=&amp;firstname=&amp;lastname=&amp;company=&amp;phone=&amp;email=&amp;SUPPLIER=[optional]</li> <li>SHIPMETHOD/UPSAPI-REGISTER?shipper_number=&amp;url=&amp;address1=&amp;address2=&amp;city=&amp;state=&amp;zip=&amp;country=&amp;company=&amp;phone=&amp;email=&amp;supplier=optional</li> <li>SHIPMETHOD/UPDATE?provider=USPS&amp;usps_dom=&amp;usps_dom_handling&amp;usps_dom_ins&amp;usps_dom_insprice&amp;usps_int_priority=&amp;usps_int_express&amp;usps_int_expressg</li> <li>SHIPMETHOD/UPDATE?provider=UPSAPI&amp;upsapii_dom&amp;upsapi_int&amp;supplier=</li> <li>SHIPMETHOD/UPDATE?provider=FEDEX&amp;rates=&amp;dom=1|0&amp;int=1|0&amp;supplier=</li> <li>SHIPMETHOD/UPDATE?provider=FLEX:CODE&amp;active=1|0&amp;rules=1|0&amp;region=&amp;name=&amp;carrier=&amp;</li> <li>SHIPMETHOD/INSERT?provider=FLEX:CODE</li> <li>SHIPMETHOD/REMOVE?provider=FLEX:CODE</li> <li>SHIPMETHOD/DATATABLE-EMPTY&amp;provider=FLEX:CODE</li> <li>SHIPMETHOD/DATATABLE-INSERT&amp;provider=FLEX:CODE&amp;key1=value1&amp;key2=value2</li> <li>SHIPMETHOD/DATATABLE-REMOVE&amp;provider=FLEX:CODE&amp;guid=xyz</li> <li>SHIPMETHOD/RULESTABLE-EMPTY?provider=&amp;table=</li> <li>SHIPMETHOD/RULESTABLE-INSERT?provider=&amp;table=&amp;guid=&amp;name=&amp;filter=&amp;exec=&amp;match=&amp;value=&amp;schedule=&amp;</li> <li>SHIPMETHOD/RULESTABLE-UPDATE?provider=&amp;table=&amp;guid=&amp;name=&amp;filter=&amp;exec=&amp;match=&amp;value=&amp;schedule=&amp;</li> <li>SHIPMETHOD/RULESTABLE-REMOVE?provider=&amp;table=&amp;guid=&amp;name=&amp;filter=&amp;exec=&amp;match=&amp;value=&amp;schedule=&amp;</li> <li>PAYMENT/OFFLINE?tender=CASH|GIFTCARD|PICKUP|CHECK|COD|CHKOD|PO|WIRE&amp;fee=&amp;instructions=&amp;payto=</li> <li>PAYMENT/GATEWAY?tender=CC&amp;</li> <li>PAYMENT/GATEWAY?tender=ECHECK&amp;</li> <li>PAYMENT/WALLET-AMZPAY?tender=AMZPAY&amp;color=&amp;size=&amp;background&amp;env=0|1|2</li> <li>PAYMENT/WALLET-GOOGLE?tender=GOOGLE&amp;google_key=&amp;google_merchantid=&amp;google_api_env=&amp;google_api_analytics=&amp;google_api_merchantcalc=&amp;google_dest_zip=&amp;google_int_shippolicy=&amp;google_pixelurls=&amp;google_tax_tables=</li> <li>PAYMENT/WALLET-PAYPALEC?tender=PAYPALEC&amp;paypal_api_env&amp;paypal_api_reqconfirmship&amp;paypal_api_callbacks&amp;paypal_email&amp;paypal_api_user&amp;paypal_api_pass&amp;paypal_api_sig&amp;paypal_paylater&amp;</li> <li>PAYMENT/CUSTOM?tender=CUSTOM&amp;description=</li> </ul> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@updates",
            "description": "<p>an array of cmd objects</p> "
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
    "url": "adminCustomerCreate",
    "title": "adminCustomerCreate",
    "name": "adminCustomerCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@updates",
            "description": "<p>&lt;![CDATA[</p> <ul> <li>CREATE?email= see adminCustomerUpdate ]]&gt;</li> </ul> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "%CUSTOMER",
            "description": "<p>Customer Object</p> <example> &lt;![CDATA[ example needed. ]]&gt; </example>"
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
    "url": "adminCustomerDetail",
    "title": "adminCustomerDetail",
    "name": "adminCustomerDetail",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CID",
            "description": "<p>Customer ID adminCustomerDetail supports additional parameters:</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "newsletters",
            "description": "<p>1 (returns @NEWSLETTERS)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "addresses",
            "description": "<p>1  (returns @BILLING @SHIPPING)   [[ this may duplicate data from %CUSTOMER ]]</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "wallets",
            "description": "<p>1   (returns @WALLETS)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "wholesale",
            "description": "<p>1  (returns %WS)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "giftcards",
            "description": "<p>1 (returns @GIFTCARDS)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "tickets",
            "description": "<p>1 (returns @TICKETS)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>1 (returns @NOTES)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "events",
            "description": "<p>1 (returns @EVENTS)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "orders",
            "description": "<p>1 (returns @ORDERS)</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "%CUSTOMER",
            "description": "<p>Customer Object</p> "
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
    "url": "adminCustomerOrganizationCreate",
    "title": "adminCustomerOrganizationCreate",
    "name": "adminCustomerOrganizationCreate",
    "group": "admin",
    "description": "<p>TODO | ID              | int(10) unsigned    | NO   | PRI | NULL    | auto_increment | | MID             | int(10) unsigned    | NO   | MUL | 0       |                | | USERNAME        | varchar(20)         | NO   |     |         |                | | PRT             | tinyint(3) unsigned | NO   |     | 0       |                | | CID             | int(10) unsigned    | NO   |     | 0       |                | | EMAIL           | varchar(65)         | NO   |     |         |                | | DOMAIN          | varchar(65)         | YES  |     | NULL    |                | | firstname       | varchar(25)         | NO   |     |         |                | | lastname        | varchar(25)         | NO   |     |         |                | | company         | varchar(100)        | NO   |     |         |                | | address1        | varchar(60)         | NO   |     |         |                | | address2        | varchar(60)         | NO   |     |         |                | | city            | varchar(30)         | NO   |     |         |                | | region          | varchar(10)         | NO   |     |         |                | | postal          | varchar(9)          | NO   |     |         |                | | countrycode     | varchar(9)          | NO   |     |         |                | | phone           | varchar(12)         | NO   |     |         |                | | LOGO            | varchar(60)         | NO   |     |         |                | | BILLING_CONTACT | varchar(60)         | NO   |     |         |                | | BILLING_PHONE   | varchar(60)         | NO   |     |         |                | | ALLOW_PO        | tinyint(3) unsigned | NO   |     | 0       |                | | RESALE          | tinyint(3) unsigned | NO   |     | 0       |                | | RESALE_PERMIT   | varchar(20)         | NO   |     |         |                | | CREDIT_LIMIT    | decimal(10,2)       | NO   |     | NULL    |                | | CREDIT_BALANCE  | decimal(10,2)       | NO   |     | NULL    |                | | CREDIT_TERMS    | varchar(25)         | NO   |     |         |                | | ACCOUNT_MANAGER | varchar(10)         | NO   |     |         |                | | ACCOUNT_TYPE    | varchar(20)         | NO   |     |         |                | | ACCOUNT_REFID   | varchar(36)         | NO   |     |         |                | | JEDI_MID        | int(11)             | NO   |     | 0       |                |</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminCustomerOrganizationDetail",
    "title": "adminCustomerOrganizationDetail",
    "name": "adminCustomerOrganizationDetail",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ORGID",
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
    "url": "adminCustomerOrganizationRemove",
    "title": "adminCustomerOrganizationRemove",
    "name": "adminCustomerOrganizationRemove",
    "group": "admin",
    "description": "<p>remove an organizationTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ORGID",
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
    "url": "adminCustomerOrganizationSearch",
    "title": "adminCustomerOrganizationSearch",
    "name": "adminCustomerOrganizationSearch",
    "group": "admin",
    "description": "<p>find an organizationTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CONTACT",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PHONE",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DOMAIN",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "EMAIL",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ORGID",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "IS_LOCKED",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ACCOUNT_MANAGER",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ACCOUNT_TYPE",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SCHEDULE",
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
    "url": "adminCustomerOrganizationUpdate",
    "title": "adminCustomerOrganizationUpdate",
    "name": "adminCustomerOrganizationUpdate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ORGID",
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
    "url": "adminCustomerRemove",
    "title": "adminCustomerRemove",
    "name": "adminCustomerRemove",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CIDcustomer",
            "description": "<p>id #</p> "
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
    "url": "adminCustomerSearch",
    "title": "adminCustomerSearch",
    "name": "adminCustomerSearch",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "scopeGIFTCARD",
            "description": "<p>|SCHEDULE|ORDER|NAME|CID|EMAIL|PHONE|NOTES</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "searchforany",
            "description": "<p>text</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@CUSTOMERS",
            "description": "<p>Customer ID</p> "
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
    "url": "adminCustomerSelectorDetail",
    "title": "adminCustomerSelectorDetail",
    "name": "adminCustomerSelectorDetail",
    "group": "admin",
    "description": "<p>a product customer is a relative pointer to a grouping of customers.TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "selector",
            "description": "<p>CIDS=1,2,3,4 EMAILS=user@domain.com,user2@domain.com SUBLIST=0    all subscribers (any list) SUBLIST=1-15    a specific subscriber list ALL=*            all customers (regardless of subscriber status)</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@CIDSan",
            "description": "<p>array of product id&#39;s</p> "
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
    "url": "adminCustomerUpdate",
    "title": "adminCustomerUpdate",
    "name": "adminCustomerUpdate",
    "group": "admin",
    "description": "<ul> <li>PASSWORDRESET?password=xyz    (or leave blank for random)</li> <li>HINTRESET</li> <li>SET?firstname=&amp;lastname=&amp;is_locked=&amp;newsletter_1=</li> <li>ADDRCREATE?SHORTCUT=DEFAULT&amp;TYPE=BILL|SHIP&amp;firstname=&amp;lastname=&amp;phone=&amp;company=&amp;address1&amp;email=.. </li> <li>ADDRUPDATE? [see ADDRCREATE]</li> <li>ADDRREMOVE?TYPE=&amp;SHORTCUT=</li> <li>SENDEMAIL?MSGID=&amp;MSGSUBJECT=optional&amp;MSGBODY=optional</li> <li>ORGCREATE?firstname=&amp;middlename=&amp;lastname=&amp;company=&amp;address1=&amp;address2=&amp;city=&amp;region=&amp;postal=&amp;countrycode=&amp;phone=&amp;email=&amp;ALLOW_PO=&amp;SCHEDULE=&amp;RESALE=&amp;RESALE_PERMIT=&amp;CREDIT_LIMIT=&amp;CREDIT_BALANCE=&amp;CREDIT_TERMS=&amp;ACCOUNT_MANAGER=&amp;ACCOUNT_TYPE=&amp;ACCOUNT_REFID=&amp;JEDI_MID=&amp;DOMAIN=&amp;LOGO=&amp;IS_LOCKED=&amp;BILLING_PHONE=&amp;BILLING_CONTACT=&amp;</li> <li>ORDERLINK?OID=</li> <li>NOTECREATE?TXT=</li> <li>NOTEREMOVE?NOTEID=</li> <li>WALLETCREATE?CC=&amp;YY=&amp;MM=</li> <li>WALLETDEFAULT?SECUREID=</li> <li>WALLETREMOVE?SECUREID=</li> <li>REWARDUPDATE?i=&amp;reason=&amp;</li> <li>SETORIGIN?origin=integer</li> <li>ADDTODO?title=&amp;note=</li> <li>ADDTICKET?title=&amp;note=</li> <li>DEPRECATED: WSSET?SCHEDULE=&amp;ALLOW_PO=&amp;RESALE=&amp;RESALE_PERMIT=&amp;CREDIT_LIMIT=&amp;CREDIT_BALANCE=&amp;ACCOUNT_MANAGER=&amp;</li> </ul> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CIDCustomer",
            "description": "<p>ID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@updates",
            "description": "<p></ul> ]]&gt;</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "%CUSTOMER",
            "description": "<p>Customer Object</p> "
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
    "url": "adminCustomerWalletPeek",
    "title": "adminCustomerWalletPeek",
    "name": "adminCustomerWalletPeek",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminDSAgentCreate",
    "title": "adminDSAgentCreate",
    "name": "adminDSAgentCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminDSAgentDetail",
    "title": "adminDSAgentDetail",
    "name": "adminDSAgentDetail",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminDSAgentList",
    "title": "adminDSAgentList",
    "name": "adminDSAgentList",
    "group": "admin",
    "description": "<p>returns a list of projects</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminDSAgentRemove",
    "title": "adminDSAgentRemove",
    "name": "adminDSAgentRemove",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminDSAgentUpdate",
    "title": "adminDSAgentUpdate",
    "name": "adminDSAgentUpdate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminDataQuery",
    "title": "adminDataQuery",
    "name": "adminDataQuery",
    "group": "admin",
    "description": "<p>accesses local management database for a variety of fields/reports</purpose></p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<pre><code>listing-active,listing-active-fixed,listing-active-store,listing-active-auction,listing-all,listing-allwattempts, event-warnings,event-success,event-pending,event-target-powr.auction,event-target-ebay.auction,event-target-ebay.fixed </code></pre>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "since_gmtepoch",
            "description": "<p>timestamp - returns all data since that time</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "batchidbatchid",
            "description": "<p>(only valid with event- requests)</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@HEADER",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@ROWS",
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
    "url": "adminDebugProduct",
    "title": "adminDebugProduct",
    "name": "adminDebugProduct",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PID",
            "description": "<p>product id</p> "
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
    "url": "adminDebugPromotion",
    "title": "adminDebugPromotion",
    "name": "adminDebugPromotion",
    "group": "admin",
    "description": "<p>does a promotion debugTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SRC",
            "description": "<p>ORDER|DEST|CART</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p>SRC:CART</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ITEM1",
            "description": "<p>SRC=DEST: ITEM1,ITEM2,ITEM3</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "QTY1",
            "description": "<p>SRC=DEST: QTY1, QTY2, QTY3</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ZIP",
            "description": "<p>SRC=DEST:</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "STATE",
            "description": "<p>SRC=DEST:</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "COUNTRY",
            "description": "<p>SRC=DEST:</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ORDERID",
            "description": "<p>SRC=ORDER</p> "
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
    "url": "adminDebugSearch",
    "title": "adminDebugSearch",
    "name": "adminDebugSearch",
    "group": "admin",
    "description": "<p>runs a debug search query through the analyzerTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "VERB",
            "description": "<p>RAWE-QUERY|RAWE-SCHEMA-PID-LIVE|RAWE-SCHEMA-PID-CONFIGURED|RAWE-SHOWPID|RAWE-INDEXPID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PID",
            "description": "<p>product id (optional)</p> "
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
    "url": "adminDebugShipping",
    "title": "adminDebugShipping",
    "name": "adminDebugShipping",
    "group": "admin",
    "description": "<p>does a shipping debugTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SRC",
            "description": "<p>ORDER|DEST|CART</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p>SRC:CART</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ITEM1",
            "description": "<p>SRC=DEST: ITEM1,ITEM2,ITEM3</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "QTY1",
            "description": "<p>SRC=DEST: QTY1, QTY2, QTY3</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ZIP",
            "description": "<p>SRC=DEST:</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "STATE",
            "description": "<p>SRC=DEST:</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "COUNTRY",
            "description": "<p>SRC=DEST:</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ORDERID",
            "description": "<p>SRC=ORDER</p> "
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
    "url": "adminDebugSite",
    "title": "adminDebugSite",
    "name": "adminDebugSite",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "check-global",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "check-domains",
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
    "url": "adminDebugTaxes",
    "title": "adminDebugTaxes",
    "name": "adminDebugTaxes",
    "group": "admin",
    "description": "<p>does a tax debugTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SRC",
            "description": "<p>ORDER|DEST|CART</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p>SRC:CART</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ITEM1",
            "description": "<p>SRC=DEST: ITEM1,ITEM2,ITEM3</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "QTY1",
            "description": "<p>SRC=DEST: QTY1, QTY2, QTY3</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ZIP",
            "description": "<p>SRC=DEST:</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "STATE",
            "description": "<p>SRC=DEST:</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "COUNTRY",
            "description": "<p>SRC=DEST:</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ORDERID",
            "description": "<p>SRC=ORDER</p> "
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
    "url": "adminDomainDetail",
    "title": "adminDomainDetail",
    "name": "adminDomainDetail",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DOMAINNAME",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@HOSTS",
            "description": "<pre><code>{ &quot;HOSTNAME&quot;:&quot;www&quot;, &quot;HOSTTYPE&quot;:&quot;APP|REDIR|VSTORE|CUSTOM&quot; }, HOSTTYPE=APP        will have &quot;PROJECT&quot; HOSTTYPE=REDIR    will have &quot;REDIR&quot;:&quot;www.domain.com&quot; &quot;URI&quot;:&quot;/path/to/301&quot;  (if URI is blank then it will redirect with previous path) HOSTTYPE=VSTORE    will have @REWRITES </code></pre>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "%EMAIL",
            "description": "<pre><code>EMAIL_TYPE=FUSEMAIL EMAIL_TYPE=GOOGLE EMAIL_TYPE=NONE EMAIL_TYPE=MX        MX1,MX2 parameters </code></pre>"
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
    "url": "adminDomainDetail",
    "title": "adminDomainDetail",
    "name": "adminDomainDetail",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DOMAINNAME",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@MSGS",
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
    "url": "adminDomainList",
    "title": "adminDomainList",
    "name": "adminDomainList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "onal",
            "defaultValue": "1",
            "description": "<p>id=&quot;prtpartition (optional)</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@DOMAINS",
            "description": "<p>an array of domains, each row contains { id:domainname prt:# }</p> "
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
    "url": "adminDomainMacro",
    "title": "adminDomainMacro",
    "name": "adminDomainMacro",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DOMAINNAMEdomain.com",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@updates",
            "description": "<p>&lt;![CDATA[ DOMAIN-RESERVE        (note: leave DOMAINNAME blank/empty) DOMAIN-TRANSFER DOMAIN-REGISTER DOMAIN-DELEGATE DOMAIN-REMOVE DOMAIN-PRT-SET?PRT=### HOST-ADD?HOSTNAME=www|app|m HOST-SET?HOSTNAME=www|app|m&amp;HOSTTYPE=PROJECT|VSTORE|REDIR|CUSTOM HOST-KILL?HOSTNAME=www EMAIL-DKIM-INIT EMAIL-SET?TYPE=FUSEMAIL|GOOGLE|NONE|MX&amp;MX1=&amp;MX2= VSTORE-MAKE-PRIMARY VSTORE-KILL-REWRITE?PATH= VSTORE-ADD-REWRITE?PATH=&amp;TARGETURL= ]]&gt;</p> "
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
    "url": "adminEBAYAPI-AddFixedPriceItem",
    "title": "adminEBAYAPI-AddFixedPriceItem",
    "name": "adminEBAYAPI_AddFixedPriceItem",
    "group": "admin",
    "description": "<p>runs an eBay AddFixedPriceItem (see adminEBAYAPI-AddItem)TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminEBAYAPI-AddItem",
    "title": "adminEBAYAPI-AddItem",
    "name": "adminEBAYAPI_AddItem",
    "group": "admin",
    "description": "<p>runs an eBay API callsTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Item/SKUproduct",
            "description": "<p>id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Item/Quantityquantity",
            "description": "<p>to launch (must be 1 for auctions)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Item/UUIDa",
            "description": "<p>unique # for this request</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "Profilezoovy",
            "description": "<p>launch profile to load settings from, if profile is not set, then ebay:profile will be used.</p> "
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
    "url": "adminEBAYAPI-VerifyAddFixedPriceItem",
    "title": "adminEBAYAPI-VerifyAddFixedPriceItem",
    "name": "adminEBAYAPI_VerifyAddFixedPriceItem",
    "group": "admin",
    "description": "<p>runs an eBay VerifyAddFixedPriceItem (see adminEBAYAPI-AddItem)TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminEBAYAPI-VerifyAddItem",
    "title": "adminEBAYAPI-VerifyAddItem",
    "name": "adminEBAYAPI_VerifyAddItem",
    "group": "admin",
    "description": "<p>runs an eBay VerifyAddItem (see adminEBAYAPI-AddItem)TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminEBAYMacro",
    "title": "adminEBAYMacro",
    "name": "adminEBAYMacro",
    "group": "admin",
    "description": "<p>Modify the eBay ConfigurationTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PROFILE",
            "description": "<p>Profile specific calls require admin</p> "
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
    "url": "adminEBAYProfileDetail",
    "title": "adminEBAYProfileDetail",
    "name": "adminEBAYProfileDetail",
    "group": "admin",
    "description": "<p>Returns the data in an eBay launch profileTODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminEBAYProfileList",
    "title": "adminEBAYProfileList",
    "name": "adminEBAYProfileList",
    "group": "admin",
    "description": "<p>Returns the list of possible profilesTODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminEBAYShippingDetail",
    "title": "adminEBAYShippingDetail",
    "name": "adminEBAYShippingDetail",
    "group": "admin",
    "description": "<p>Parses and returns a structured version of the shipping configuration for the profile requestedTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PROFILE",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@OUR_DOMESTIC",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@OUR_INTERNATIONAL",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@ALL_LOCATIONS",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@OUR_LOCATIONS",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@PREFERENCES",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@SERVICES_DOMESTIC",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@SERVICES_INTERNATIONAL",
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
    "url": "adminEBAYTemplateDownload",
    "title": "adminEBAYTemplateDownload",
    "name": "adminEBAYTemplateDownload",
    "group": "admin",
    "description": "<p>lists the fields on an html wizardTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ebay",
            "description": "<p>:template</p> "
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
    "url": "adminEBAYTokenDetail",
    "title": "adminEBAYTokenDetail",
    "name": "adminEBAYTokenDetail",
    "group": "admin",
    "description": "<p>performs ebay &#39;GetUser&#39; call to verify current token, returns info associated with the partitionTODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@PROFILES",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "%TOKEN",
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
    "url": "adminEBAYTokenList",
    "title": "adminEBAYTokenList",
    "name": "adminEBAYTokenList",
    "group": "admin",
    "description": "<p>lists all tokens across all partitions (one token per partition)TODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@ACCOUNTS",
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
    "url": "adminEBAYWizardPreview",
    "title": "adminEBAYWizardPreview",
    "name": "adminEBAYWizardPreview",
    "group": "admin",
    "description": "<p>-- will need some love --TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminFAQCreate",
    "title": "adminFAQCreate",
    "name": "adminFAQCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminFAQDetail",
    "title": "adminFAQDetail",
    "name": "adminFAQDetail",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminFAQList",
    "title": "adminFAQList",
    "name": "adminFAQList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminFAQMacro",
    "title": "adminFAQMacro",
    "name": "adminFAQMacro",
    "group": "admin",
    "description": "<p>TODO</p> <ul> <li>ADDNOTE?note=xyz&amp;private=1|0</li> <li>ASK?</li> <li>UPDATE?escalate=1|0&amp;class=PRESALE|POSTSALE|EXCHANGE|RETURN</li> <li>CLOSE</li> </ul> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminFAQRemove",
    "title": "adminFAQRemove",
    "name": "adminFAQRemove",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminGiftcardCreate",
    "title": "adminGiftcardCreate",
    "name": "adminGiftcardCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "expiresYYYYMMDD",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "balancecurrency",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "quantitydefaults",
            "description": "<p>to 1 (if not specified)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>if a customer exists this will be matched to the cid, if a customer cannot be found a new customer account will be created, not compatible with qty &gt; 1</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "series",
            "description": "<p>a mechanism for grouping cards, usually used with quantity greater than 1</p> "
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
    "url": "adminGiftcardDetail",
    "title": "adminGiftcardDetail",
    "name": "adminGiftcardDetail",
    "group": "admin",
    "description": "<p>TODO Not finished</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminGiftcardList",
    "title": "adminGiftcardList",
    "name": "adminGiftcardList",
    "group": "admin",
    "description": "<p>returns a list of projectsTODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminGiftcardMacro",
    "title": "adminGiftcardMacro",
    "name": "adminGiftcardMacro",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "Array",
            "optional": false,
            "field": "@updates",
            "description": ""
          }
        ]
      }
    },
    "description": "<p>SET/EMAIL?email=&amp;note= SET/BALANCE?email=&amp;note= SET/EXPIRES?expires=&amp;note= SET/CARDTYPE?cardtype=&amp;note=</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminGiftcardSearch",
    "title": "adminGiftcardSearch",
    "name": "adminGiftcardSearch",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminGiftcardSeriesList",
    "title": "adminGiftcardSeriesList",
    "name": "adminGiftcardSeriesList",
    "group": "admin",
    "description": "<p>returns a list of projectsTODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminGiftcardSetupProduct",
    "title": "adminGiftcardSetupProduct",
    "name": "adminGiftcardSetupProduct",
    "group": "admin",
    "description": "<p>creates a product that when purchased automatically creates a giftcardTODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminGiftcardSetupProduct",
    "title": "adminGiftcardSetupProduct",
    "name": "adminGiftcardSetupProduct",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminImageDelete",
    "title": "adminImageDelete",
    "name": "adminImageDelete",
    "group": "admin",
    "description": "<p>deletes an image</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "filefilename",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "folderfolder",
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
    "url": "adminImageDetail",
    "title": "adminImageDetail",
    "name": "adminImageDetail",
    "group": "admin",
    "description": "<p>returns stored details about an media library image file.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>filename of the image ex: path/to/image.jpg</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "FILENAME",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "EXT",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "H",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "W",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "SIZE",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "TS",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "FID",
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
    "url": "adminImageFolderCreate",
    "title": "adminImageFolderCreate",
    "name": "adminImageFolderCreate",
    "group": "admin",
    "description": "<p>creates a new folder in the media library, folder names must be in lower case.</purpose></p> <p>you can call these in any order, subpaths will be created.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "folder",
            "description": "<p>DIR1|DIR2</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "fid",
            "description": "<p>the internal folder id#</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the name the folder was created</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request Example",
          "content": "<Category FID=\"1234\" Name=\"\"/>",
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
    "url": "adminImageFolderDelete",
    "title": "adminImageFolderDelete",
    "name": "adminImageFolderDelete",
    "group": "admin",
    "description": "<p>request the deletion of a category (do not implement this right now)</purpose></p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "folder",
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
    "url": "adminImageFolderList",
    "title": "adminImageFolderList",
    "name": "adminImageFolderList",
    "group": "admin",
    "description": "<p>returns a list of image categories and timestamps for each category</purpose></p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@folders",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\n<Folder ImageCount=\"5\" TS=\"123\" Name=\"Path1\" FID=\"1\" ParentFID=\"0\" ParentName=\"|\"/>\n<Folder ImageCount=\"2\" TS=\"456\" Name=\"Path1b\" FID=\"2\" ParentFID=\"1\" ParentName=\"|Path1\"/>\n<Folder ImageCount=\"1\" TS=\"567\" Name=\"Path1bI\" FID=\"3\" ParentFID=\"2\" ParentName=\"|Path1|Pathb\"/>\n<Folder ImageCount=\"0\" TS=\"789\" Name=\"Path2\" FID=\"4\" ParentFID=\"0\" ParentName=\"|\"/>",
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
    "url": "adminImageList",
    "title": "adminImageList",
    "name": "adminImageList",
    "group": "admin",
    "description": "<p>returns the list of images for a given folder (if specified).</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "folderfolder",
            "description": "<p>to view</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "reindexif",
            "description": "<p>a folder is requested, this will reindex the current folder</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "keywordkeyword",
            "description": "<p>(uses case insensitive substring)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "orderbyNONE",
            "description": "<p>|TS|TS_DESC|NAME|NAME_DESC|DISKSIZE|DISKSIZE_DESC|PIXEL|PIXEL_DESC</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "detailNONE",
            "description": "<p>|FOLDER</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@images",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request Example ",
          "content": "<Image Name=\"abc\" TS=\"1234\" Format=\"jpg\" />\n<Image Name=\"abc2\" TS=\"1234\" Format=\"jpg\" />\n<Image Name=\"abc3\" TS=\"1234\" Format=\"jpg\" />\n<Image Name=\"abc4\" TS=\"1234\" Format=\"jpg\" />\n<Image Name=\"abc5\" TS=\"1234\" Format=\"jpg\" />",
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
    "url": "adminImageMagick",
    "title": "adminImageMagick",
    "name": "adminImageMagick",
    "group": "admin",
    "description": "<p>accepts an image, and performs Image::Magick functions on it.</purpose></p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "base64base64",
            "description": "<p>encoded image data</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "fileguid",
            "description": "<p>fileguid (from file upload)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "@updates",
            "description": "<p>list of macros which will convert/mogrify the image see: <a href=\"http://www.imagemagick.org/script/perl-magick.php#manipulate\">http://www.imagemagick.org/script/perl-magick.php#manipulate</a></p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "mime",
            "description": "<p>image/png|image/gif|image/jpg</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "base64",
            "description": "<p>base64 encoded copy of the result file</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.area",
            "description": "<p>integer - current area resource consumed</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.base-columns",
            "description": "<p>integer - base image width (before transformations)</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.base-filename",
            "description": "<p>string - base image filename (before transformations)</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.base-rows",
            "description": "<p>integer - base image height (before transformations)</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.class",
            "description": "<p>{Direct - Pseudo}     image class</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.colors",
            "description": "<p>integer - number of unique colors in the image</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.columns",
            "description": "<p>integer - image width</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.copyright",
            "description": "<p>string - get PerlMagick&#39;s copyright</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.directory",
            "description": "<p>string - tile names from within an image montage</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.elapsed-time",
            "description": "<p>double - elapsed time in seconds since the image was created</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.error",
            "description": "<p>double - the mean error per pixel computed with methods Compare() or Quantize()</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.bounding-box",
            "description": "<p>string - image bounding box</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.disk",
            "description": "<p>integer - current disk resource consumed</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.filesize",
            "description": "<p>integer - number of bytes of the image on disk</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.format",
            "description": "<p>string - get the descriptive image format</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.geometry",
            "description": "<p>string - image geometry</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.height",
            "description": "<p>integer - the number of rows or height of an image</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.id",
            "description": "<p>integer - ImageMagick registry id</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.mean-error",
            "description": "<p>double - the normalized mean error per pixel computed with methods Compare() or Quantize()</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.map",
            "description": "<p>integer - current memory-mapped resource consumed</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.matte",
            "description": "<p>{True - False}     whether or not the image has a matte channel</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.maximum-error",
            "description": "<p>double - the normalized max error per pixel computed with methods Compare() or Quantize()</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.memory",
            "description": "<p>integer - current memory resource consumed</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.mime",
            "description": "<p>string - MIME of the image format</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.montage",
            "description": "<p>geometry - tile size and offset within an image montage</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.page.x",
            "description": "<p>integer - x offset of image virtual canvas</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.page.y",
            "description": "<p>integer - y offset of image virtual canvas</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.rows",
            "description": "<p>integer - the number of rows or height of an image</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.signature",
            "description": "<p>string - SHA-256 message digest associated with the image pixel stream</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.taint",
            "description": "<p>{True - False}     True if the image has been modified</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.total-ink-density",
            "description": "<p>double - returns the total ink density for a CMYK image</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.transparent-color",
            "description": "<p>color - ame     set the image transparent color</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.user-time",
            "description": "<p>double - user time in seconds since the image was created</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.version",
            "description": "<p>string - get PerlMagick&#39;s version</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.width",
            "description": "<p>integer - the number of columns or width of an image</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.x-resolution",
            "description": "<p>integer - x resolution of the image</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "%properties.y-resolution",
            "description": "<p>integer - y resolution of the image</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Updates",
          "content": "{\n'@updates':[\n\t'Resize?width=100&height=100,blur=1'\n\t]\n}",
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
    "url": "adminImageUpload",
    "title": "adminImageUpload",
    "name": "adminImageUpload",
    "group": "admin",
    "description": "<p>uses the file upload api to link a fileguid into a media library directory.</purpose></p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "folderfolder",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "base64base64",
            "description": "<p>encoded image data</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "fileguid",
            "description": "<p>fileguid (from file upload)</p> "
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
    "url": "adminKPIDBCollectionCreate",
    "title": "adminKPIDBCollectionCreate",
    "name": "adminKPIDBCollectionCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Collection</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>Unique identifier (36 characters) for the collection</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "priority",
            "description": "<p>The position/priority/sequence of the collection</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@GRAPH",
            "description": "<p>San array of graphs which will be serialized and returned</p> "
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
    "url": "adminKPIDBCollectionDetail",
    "title": "adminKPIDBCollectionDetail",
    "name": "adminKPIDBCollectionDetail",
    "group": "admin",
    "description": "<p>returns the contents of a collectionTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>Unique identifier for this collection</p> "
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
    "url": "adminKPIDBCollectionList",
    "title": "adminKPIDBCollectionList",
    "name": "adminKPIDBCollectionList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@COLLECTIONS",
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
    "url": "adminKPIDBCollectionRemove",
    "title": "adminKPIDBCollectionRemove",
    "name": "adminKPIDBCollectionRemove",
    "group": "admin",
    "description": "<p>removes a collectionTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>Unique identifier (36 characters) for the collection</p> "
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
    "url": "adminKPIDBCollectionUpdate",
    "title": "adminKPIDBCollectionUpdate",
    "name": "adminKPIDBCollectionUpdate",
    "group": "admin",
    "description": "<p>same as collection create (pass uuid of previous collection)TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminKPIDBDataQuery",
    "title": "adminKPIDBDataQuery",
    "name": "adminKPIDBDataQuery",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@datasets",
            "description": "<p>[&#39;dataset1&#39;,&#39;dataset2&#39;]</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "grpby",
            "description": "<p>day|dow|quarter|month|week|none</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "column",
            "description": "<p>gms|distinct|total</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "function",
            "description": "<p>sum|min|max|avg</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "period",
            "description": "<p>a formula ex: months.1, weeks.1</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "start",
            "description": "<p>yyyymmdd(not needed if period is passed)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "stop",
            "description": "<p>yyyymmdd(not needed if period is passed)</p> "
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
    "url": "adminKPIDBUserDataSetsList",
    "title": "adminKPIDBUserDataSetsList",
    "name": "adminKPIDBUserDataSetsList",
    "group": "admin",
    "description": "<p>returns a list of datasets accessible to the userTODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@DATASETS",
            "description": "<p>[ &#39;GROUP&#39;, &#39;DATASET-ID&#39;, &#39;Pretty name&#39; ], [ &#39;GROUP&#39;, &#39;DATASET-ID&#39;, &#39;Pretty name&#39; ], [ &#39;GROUP&#39;, &#39;DATASET-ID&#39;, &#39;Pretty name&#39; ],</p> <hint> The DATASET-ID is what is passed into adminKPIDBDataQuery as the &quot;dataset&quot; parameter </hint>"
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
    "url": "adminLUserTagGet",
    "title": "adminLUserTagGet",
    "name": "adminLUserTagGet",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "tag1",
            "description": "<p>&#39;&#39;</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "tag2",
            "description": "<p>&#39;&#39;</p> "
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
    "url": "adminLUserTagList",
    "title": "adminLUserTagList",
    "name": "adminLUserTagList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "tag",
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
    "url": "adminLUserTagSet",
    "title": "adminLUserTagSet",
    "name": "adminLUserTagSet",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "tagdata",
            "description": "<hint>Limited to 128 bytes per tag, 10,000 tags max (then old tags are auto-expired)</hint>"
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
    "url": "adminMessagesList",
    "title": "adminMessagesList",
    "name": "adminMessagesList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "msgid",
            "description": "<example>&lt;![CDATA[ ConfigVersion Response ResponseMsg ]]&gt;</example>"
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
    "url": "adminMessagesRemove",
    "title": "adminMessagesRemove",
    "name": "adminMessagesRemove",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "msgid",
            "description": "<example>&lt;![CDATA[ ConfigVersion Response ResponseMsg ]]&gt;</example>"
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
    "url": "adminMySystemHealth",
    "title": "adminMySystemHealth",
    "name": "adminMySystemHealth",
    "group": "admin",
    "description": "<p>Runs a series of diagnostics and returns 3 arrays @SYSTEM, @MYAPPS, @MARKET the call itself may be <em>VERY</em> slow - taking up to 30 seconds.</p> <p>each array will contain one or more responses ex: {      &#39;type&#39;:&#39;critical|issue|alert|bad|fyi|good&#39;,     &#39;system&#39;:&#39;a short (3-12 char) global unique identifier for the system ex: Inventory&#39;,     &#39;title&#39;:&#39;a pretty title for the message&#39;,     &#39;detail&#39;:&#39;not always included, but provides more detail about a specific issue what that could mean, ex: an unusually large number of unprocessed events does not mean there is a problem per-se, it means many automation systems such as inventory, supply chain,  marketplace tracking notifications and more could be delayed.&#39;,     &#39;debug&#39;:&#39;xozo some internal crap that means something to a developer&#39;, }</p> <p>TODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@SYSTEM",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@MYAPPS",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@MARKET",
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
    "url": "adminNavTreeList",
    "title": "adminNavTreeList",
    "name": "adminNavTreeList",
    "description": "<p>a list of nav elements</p> ",
    "group": "admin",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "@NAVS",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n'@NAVS':[\n\t{\t\"type\":\"navcat\", \"prt\":\"0\", \"nav\":\"PRT000\", \"title\":\"Partition 0\"  },\n\t{\t\"type\":\"navcat\", \"prt\":\"1\", \"nav\":\"PRT001\", \"title\":\"Partition 1\"  },\n\t]\n}",
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
    "url": "adminNavcatCreate",
    "title": "adminNavcatCreate",
    "name": "adminNavcatCreate",
    "group": "admin",
    "description": "<p>Creates a new navigation category or product list with a given pretty name.</purpose></p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "prettynew",
            "description": "<p>name for category</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "root.root.category",
            "description": "<p>(set to $ for list)</p> "
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
    "url": "adminNavcatDelete",
    "title": "adminNavcatDelete",
    "name": "adminNavcatDelete",
    "group": "admin",
    "description": "<p>permanently removes a navigation category or list.</purpose></p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "path.safe.name",
            "description": "<p>or path:$listname</p> "
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
    "url": "adminNavcatDetail",
    "title": "adminNavcatDetail",
    "name": "adminNavcatDetail",
    "group": "admin",
    "description": "<p>returns detailed information about a navigation category or product list.</purpose>\\</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "prt",
            "description": "<p>returns the navigation for partition</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "navtree",
            "description": "<p>returns the navigation for navtree specified (use the navtree parameter from adminNavTreeList)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request Example",
          "content": "\npath:.safe.name or path:$listname\nreturns:\npretty:'some pretty name',",
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
    "url": "adminNavcatModify",
    "title": "adminNavcatModify",
    "name": "adminNavcatModify",
    "group": "admin",
    "description": "<p>changes the pretty name of a navigation category or list</purpose></p> <p>note: will support %meta tags in the future.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "path.safe.name",
            "description": "<p>or path:$listname</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "prettynew",
            "description": "<p>name for category</p> "
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
    "url": "adminNavcatProductDelete",
    "title": "adminNavcatProductDelete",
    "name": "adminNavcatProductDelete",
    "group": "admin",
    "description": "<p>removes a single product from a navigation category or list.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "path.root.category",
            "description": "<p>or $list</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pidpid1",
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
    "url": "adminNavcatProductInsert",
    "title": "adminNavcatProductInsert",
    "name": "adminNavcatProductInsert",
    "group": "admin",
    "description": "<p>adds a single product to a navigation category or list.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "path.root.category",
            "description": "<p>or $list</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>pid1</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<h1 id=\"-0-first-element-in-the-list-1-last-element-in-the-list-\">(0=first element in the list, -1=last element in the list)</h1> "
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
    "url": "adminNewsletterList",
    "title": "adminNewsletterList",
    "name": "adminNewsletterList",
    "group": "admin",
    "description": "<p>see appNewsletterList, unlike public call also show hidden and not provisioned newslettersTODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminOrderCreate",
    "title": "adminOrderCreate",
    "name": "adminOrderCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@PAYMENTS",
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
    "url": "adminOrderDetail",
    "title": "adminOrderDetail",
    "name": "adminOrderDetail",
    "group": "admin",
    "description": "<p>provides a full dump of data inside an order</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p>admin session id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>Order ID</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>a json representation of an order (exact fields depend on version/order source)</p> "
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
    "url": "adminOrderDetail",
    "title": "adminOrderDetail",
    "name": "adminOrderDetail",
    "group": "admin",
    "description": "<p>provides a full dump of data inside an order</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p>admin session id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "orderi",
            "description": "<p>Order ID</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>a json representation of an order (exact fields depend on version/order source)</p> "
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
    "url": "adminOrderList",
    "title": "adminOrderList",
    "name": "adminOrderList",
    "group": "admin",
    "description": "<p>returns a list of orders based on one or more filter criteria</purpose></p> <p><strong> caution </strong> maximum number of records returned is 1,000</p> <p>Detail level 3 includes POOL, CREATED_GMT Detail level 5 includes CUSTOMER ID, ORDER_BILL_NAME, ORDER_BILL_EMAIL, ORDER_BILL_ZONE, ORDER_PAYMENT_STATUS, ORDER_PAYMENT_METHOD, ORDER_TOTAL, ORDER_SPECIAL, MKT, MKT_BITSTR</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_admin",
            "description": "<p>admin session id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "TS",
            "description": "<p>modified since timestamp</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "EREFID",
            "description": "<p>string (external reference id)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CUSTOMER",
            "description": "<p>CID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "DETAIL",
            "description": "<p>1,3,5</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "POOL",
            "description": "<p>RECENT,PENDING,PROCESSING</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PRT",
            "description": "<p>0</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "BILL_FULLNAME",
            "description": "<p>string</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "BILL_EMAIL",
            "description": "<p>string</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "BILL_PHONE",
            "description": "<p>string</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "SHIP_FULLNAME",
            "description": "<p>string</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CREATED_GMT",
            "description": "<h1 id=\"epoch\">epoch</h1> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CREATEDTILL_GMT",
            "description": "<h1 id=\"epoch\">epoch</h1> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PAID_GMT",
            "description": "<h1 id=\"epoch\">epoch</h1> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PAIDTILL_GMT",
            "description": "<h1 id=\"epoch\">epoch</h1> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PAYMENT_STATUS",
            "description": "<p>001</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "SHIPPED_GMT",
            "description": "<p>1/0</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "NEEDS_SYNC",
            "description": "<p>1/0</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "MKT",
            "description": "<p>EBY,AMZ</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "LIMIT",
            "description": "<h1 id=\"int-records-returned-\">int (records returned)</h1> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@orders",
            "description": "<p>an array of orders containing varied amounts of data based on the detail level requested</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Detail Level 1",
          "content": "{\n'@orders':[\n\t[ 'ORDERID':'2012-01-1234', 'MODIFIED_GMT':123456 ],\n\t[ 'ORDERID':'2012-01-1235', 'MODIFIED_GMT':123457 ],\n\t[ 'ORDERID':'2012-01-1236', 'MODIFIED_GMT':123458 ]\n\t]\n}",
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
    "url": "adminOrderMacro",
    "title": "adminOrderMacro",
    "name": "adminOrderMacro",
    "group": "admin",
    "description": "<p>uses the embedded macro language to set order parameters, depending on access levels macros may not be available.</p> <p><strong>Using Order Macros (@updates)</strong></p> <p>Order Macros provide a developer with a way to make easy, incremental, non-destructive updates to orders.  The syntax for a macro payload uses a familiar dsn format cmd?key=value&amp;key=value, along with the same uri encoding rules, and one command per line (making the files very easy to read) -- here is an example: &quot;SETPOOL?pool=COMPLETED&quot; (without the quotes). A complete list of available commands is below:</p> <ul> <li>CREATE</li> <li>SETPOOL?pool=[pool]\\n</li> <li>CAPTURE?amount=[amount]\\n</li> <li>ADDTRACKING?carrier=[UPS|FDX]&amp;track=[1234]\\n</li> <li>EMAIL?msg=[msgname]\\n</li> <li>ADDPUBLICNOTE?note=[note]\\n</li> <li>ADDPRIVATENOTE?note=[note]\\n</li> <li>ADDCUSTOMERNOTE?note=[note]\\n</li> <li>SET?key=value     (for setting attributes)</li> <li>SPLITORDER</li> <li>MERGEORDER?oid=src orderid</li> <li>ADDPAYMENT?tender=CREDIT&amp;amt=0.20&amp;UUID=&amp;ts=&amp;note=&amp;CC=&amp;CY=&amp;CI=&amp;amt=</li> <li>ADDPROCESSPAYMENT?VERB=&amp;same_params_as_addpayment<br>   NOTE: unlike &#39;ADDPAYMENT&#39; the &#39;ADDPROCESSPAYMENT&#39; this will add then run the specified verb.   Verbs are: &#39;INIT&#39; the payment as if it had been entered by the buyer at checkout,   other verbs: AUTHORIZE|CAPTURE|CHARGE|VOID|REFUND</li> <li>PROCESSPAYMENT?VERB=verb&amp;UUID=uuid&amp;amt=<br>   Possible verbs: AUTHORIZE|CAPTURE|CHARGE|VOID|REFUND</li> <li>SETSHIPADDR?ship/company=&amp;ship/firstname=&amp;ship/lastname=&amp;ship/phone=&amp;ship/address1=&amp;ship/address2=&amp;ship/city=&amp;ship/country=&amp;ship/email=&amp;ship/state=&amp;ship/province=&amp;ship/zip=&amp;ship/int_zip=</li> <li>SETBILLADDR?bill/company=&amp;bill/firstname=&amp;bill/lastname=&amp;bill/phone=&amp;bill/address1=&amp;bill/address2=&amp;bill/city=&amp;bill/country=&amp;bill/email=&amp;bill/state=&amp;bill/province=&amp;bill/zip=&amp;bill/int_zip=</li> <li>SETSHIPPING?shp_total=&amp;shp_taxable=&amp;shp_carrier=&amp;hnd_total=&amp;hnd_taxable=&amp;ins_total=&amp;ins_taxable=&amp;spc_total=&amp;spc_taxable=</li> <li>SETADDRS?any=attribute&amp;anyother=attribute</li> <li>SETTAX?sum/tax_method=&amp;sum/tax_total&amp;sum/tax_rate_state=&amp;sum/tax_rate_zone=&amp;</li> <li>SETSTUFFXML?xml=encodedstuffxml</li> <li>ITEMADD?uuid=&amp;sku=xyz&amp;</li> <li>ITEMREMOVE?uuid=</li> <li>ITEMUPDATE?uuid=&amp;qty=&amp;price=&amp;</li> <li>SAVE</li> <li>ECHO</li> </ul> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>order id of the order# to update</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@updates",
            "description": "<p>macro content</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n'@updates':[\n\t'cmd',\n\t'cmd?some=param',\n\t]\n}",
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
    "url": "adminOrderPaymentAction",
    "title": "adminOrderPaymentAction",
    "name": "adminOrderPaymentAction",
    "group": "admin",
    "description": "<p>interally runs the PAYMENTACTION orderUpdate Macro, but can be called as a separate API</purpose></p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>2011-01-1234</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "payment",
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
    "url": "adminOrderPaymentMethods",
    "title": "adminOrderPaymentMethods",
    "name": "adminOrderPaymentMethods",
    "group": "admin",
    "description": "<p>displays a list of payment methods available for an order (optional), there are a few scenarios where things get wonky. first - if the logged in user is admin, then additional methods like cash, check, all become available (assuming they are enabled). second - if the order has a zero dollar total, only ZERO will be returned. third - if the order has giftcards, no paypalec is available. (which is fine, because paypalec is only available for the client) fourth - if the order has paypalec payment (already) then other methods aren&#39;t available, because paypal doesn&#39;t support mixing and matching payment types. TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "onal",
            "defaultValue": "1",
            "description": "<p>id=&quot;orderidorderid #</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@methods",
            "description": "<example>"
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
    "url": "adminOrderSearch",
    "title": "adminOrderSearch",
    "name": "adminOrderSearch",
    "group": "admin",
    "description": "<p>returns a list of orders based on the results of an elastic search</purpose></p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ELASTIC",
            "description": "<p>elastic search parameters</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "DETAIL",
            "description": "<p>1,3,5</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "DEBUG",
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
    "url": "adminPageGet",
    "title": "adminPageGet",
    "name": "adminPageGet",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PATH",
            "description": "<p>.path.to.page or @CAMPAIGNID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@get",
            "description": "<p>[ &#39;attrib1&#39;, &#39;attrib2&#39;, &#39;attrib3&#39; ]</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "all",
            "description": "<p>set to 1 to return all fields (handy for json libraries which don&#39;t return @get=[]) </p> <p><example> attrib1:xyz attrib2:xyz </example></p> <note>leave @get blank for all page attributes</note>"
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
    "url": "adminPageList",
    "title": "adminPageList",
    "name": "adminPageList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@PAGES",
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
    "url": "adminPageSet",
    "title": "adminPageSet",
    "name": "adminPageSet",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PATH.path.to.page",
            "description": "<p>or @CAMPAIGNID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "%set",
            "description": "<p>{ &#39;attrib1&#39;=&gt;&#39;newvalue&#39;, &#39;attrib2&#39;=&gt;&#39;new value&#39;, &#39;attrib3&#39;=&gt;undefined }</p> <hint>set value to &quot;undefined&quot; to delete it.</hint>"
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
    "url": "adminPartitionList",
    "title": "adminPartitionList",
    "name": "adminPartitionList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@PRTS",
            "description": "<p>An array of partitions</p> "
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
    "url": "adminPartnerGet",
    "title": "adminPartnerGet",
    "name": "adminPartnerGet",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "partnerEBAY",
            "description": "<note> &lt;![CDATA[ ]]&gt; </note>"
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
    "url": "adminPartnerSet",
    "title": "adminPartnerSet",
    "name": "adminPartnerSet",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "partnerEBAY",
            "description": "<note> &lt;![CDATA[ Generic call to save data retrieved from partner return URL&#39;s, parameters vary. ]]&gt; </note>"
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
    "type": "POST",
    "url": "adminPriceScheduleCreate",
    "title": "adminPriceScheduleCreate",
    "name": "adminPriceScheduleCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminPriceScheduleDetail",
    "title": "adminPriceScheduleDetail",
    "name": "adminPriceScheduleDetail",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SIDschedule",
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
    "url": "adminPriceScheduleList",
    "title": "adminPriceScheduleList",
    "name": "adminPriceScheduleList",
    "group": "admin",
    "description": "<p>Returns a list of available schedule id&#39;s.<br>Each schedule has a unique 6 digit alphanumeric code that is used as an identifier. TODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@SCHEDULES",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n'@SCHEDULES':[\n{ 'id':'SCHED1' },\n{ 'id':'SCHED2' },\n{ 'id':'SCHED3' }\n]\n}",
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
    "url": "adminPriceScheduleRemove",
    "title": "adminPriceScheduleRemove",
    "name": "adminPriceScheduleRemove",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SIDschedule",
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
    "url": "adminPriceScheduleUpdate",
    "title": "adminPriceScheduleUpdate",
    "name": "adminPriceScheduleUpdate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminPrivateFileDownload",
    "title": "adminPrivateFileDownload",
    "name": "adminPrivateFileDownload",
    "group": "admin",
    "description": "<p>TODO</p> ",
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
    "url": "adminPrivateFileList",
    "title": "adminPrivateFileList",
    "name": "adminPrivateFileList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "guid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "active",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "keyword",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "limit",
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
    "url": "adminPrivateSearch",
    "title": "adminPrivateSearch",
    "name": "adminPrivateSearch",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "typeorder",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>[&#39;order&#39;]</p> <note>if not specified then: type:_all is assumed.</note> <note>www.elasticsearch.org/guide/reference/query-dsl/</note>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "mode",
            "description": "<p>elastic-native</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "filter",
            "description": "<p>&quot;mode:elastic-native&quot; id=&quot;filter { &#39;term&#39;:{ &#39;profile&#39;:&#39;DEFAULT&#39; } };</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "query",
            "description": "<p>&quot;mode:elastic-native&quot; id=&quot;query {&#39;text&#39;:{ &#39;profile&#39;:&#39;DEFAULT&#39; } };</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>100 # number of results</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>[&#39;_score&#39;,&#39;base_price&#39;,&#39;prod_name&#39;]</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "from",
            "description": "<p>100    # start from result # 100</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "scroll",
            "description": "<p>30s,1m,5m</p> <note> &lt;![CDATA[ Filter is an exact match, whereas query is a token/substring match - filter is MUCH faster and should be used when the exact value is known (ex: tags, profiles, upc, etc.)  <ul> KNOWN KEYS:  </ul> ]]&gt; </note>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@products",
            "description": "<p>an array of product ids</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@LOG",
            "description": "<p>an array of strings explaining how the search was performed (if LOG=1 or TRACEPID non-blank)</p> <caution> Using LOG=1 or TRACEPID in a product (non debug) environment will result in the search feature being disabled on a site. </caution>"
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
    "url": "adminProductAmazonDetail",
    "title": "adminProductAmazonDetail",
    "name": "adminProductAmazonDetail",
    "group": "admin",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Hash",
            "optional": false,
            "field": "%thesaurus",
            "description": ""
          },
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "@DETAIL",
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
    "url": "adminProductAmazonVerify",
    "title": "adminProductAmazonVerify",
    "name": "adminProductAmazonVerify",
    "group": "admin",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@MSGS",
            "description": "<note> TITLE|SUCCESS|INFO|WARN|STOP|PAUSE|ERROR|DEPRECATION|DEBUG|XML </note>"
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
    "url": "adminProductBUYDetail",
    "title": "adminProductBUYDetail",
    "name": "adminProductBUYDetail",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pidpid1",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "@DBMAPS",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "buycom/dbmap",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "%FLEX",
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
    "url": "adminProductCreate",
    "title": "adminProductCreate",
    "name": "adminProductCreate",
    "group": "admin",
    "description": "<p>creates a new product in the database</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pidpid",
            "description": "<p>: an A-Z|0-9|-|_ -- max length 20 characters, case insensitive</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "%attribs",
            "description": "<p>[ &#39;zoovy:prod_name&#39;:&#39;value&#39; ]</p> <example> %attribs:[ &#39;zoovy:prod_name&#39;:&#39;value&#39; ] </example>"
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
    "url": "adminProductDebugLog",
    "title": "adminProductDebugLog",
    "name": "adminProductDebugLog",
    "group": "admin",
    "description": "<p>see reports for @HEAD,@BODY format</purpose></p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pidpid1",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "GUID",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "@HEAD",
            "description": ""
          },
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "@BODY",
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
    "url": "adminProductDelete",
    "title": "adminProductDelete",
    "name": "adminProductDelete",
    "group": "admin",
    "description": "<p>removes a product id (and all variations) from the database</purpose></p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pidpid",
            "description": "<p>: an A-Z|0-9|-|_ -- max length 20 characters, case insensitive</p> "
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
    "url": "adminProductDetail",
    "title": "adminProductDetail",
    "name": "adminProductDetail",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pidpid1",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Hash",
            "optional": false,
            "field": "%attribs",
            "description": ""
          },
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "@skus",
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
    "url": "adminProductEBAYDetail",
    "title": "adminProductEBAYDetail",
    "name": "adminProductEBAYDetail",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminProductEventsDetail",
    "title": "adminProductEventsDetail",
    "name": "adminProductEventsDetail",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pidpid1",
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
    "url": "adminProductList",
    "title": "adminProductList",
    "name": "adminProductList",
    "group": "admin",
    "description": "<p>accesses the product database to return a specific hardcoded list of products</p> <hint> indexed attributes: zoovy:prod_id,zoovy:prod_name, zoovy:prod_supplierid,  zoovy:prod_salesrank, zoovy:prod_mfgid, zoovy:prod_upc, zoovy:profile </hint>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CREATED_BEFORE",
            "description": "<p>modified since timestamp</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CREATED_SINCE",
            "description": "<p>modified since timestamp</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "SUPPLIER",
            "description": "<p>supplier id</p> "
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
    "url": "adminProductMacro",
    "title": "adminProductMacro",
    "name": "adminProductMacro",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pidpid1",
            "description": ""
          },
          {
            "group": "Request",
            "type": "Array",
            "optional": false,
            "field": "@updates",
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
    "url": "adminProductManagementCategoriesComplete",
    "title": "adminProductManagementCategoriesComplete",
    "name": "adminProductManagementCategoriesComplete",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "%CATEGORIES",
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
    "url": "adminProductManagementCategoriesDetail",
    "title": "adminProductManagementCategoriesDetail",
    "name": "adminProductManagementCategoriesDetail",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@PRODUCTS",
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
    "url": "adminProductManagementCategoriesList",
    "title": "adminProductManagementCategoriesList",
    "name": "adminProductManagementCategoriesList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@CATEGORIES",
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
    "url": "adminProductOptionsUpdate",
    "title": "adminProductOptionsUpdate",
    "name": "adminProductOptionsUpdate",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pidpid1",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@pogsan",
            "description": "<p>array of pog options</p> "
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
    "url": "adminProductReviewApprove",
    "title": "adminProductReviewApprove",
    "name": "adminProductReviewApprove",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RIDreview",
            "description": "<p>id</p> "
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
    "url": "adminProductReviewCreate",
    "title": "adminProductReviewCreate",
    "name": "adminProductReviewCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminProductReviewDetail",
    "title": "adminProductReviewDetail",
    "name": "adminProductReviewDetail",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RIDreview",
            "description": "<p>id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PIDreview",
            "description": "<p>id</p> "
          }
        ]
      }
    },
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminProductReviewList",
    "title": "adminProductReviewList",
    "name": "adminProductReviewList",
    "group": "admin",
    "description": "<p>returns a list of all reviews with a filter</purpose></p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "filterALL",
            "description": "<p>|UNAPPROVED|RECENT</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PID",
            "description": "<p>product id</p> "
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
    "url": "adminProductReviewRemove",
    "title": "adminProductReviewRemove",
    "name": "adminProductReviewRemove",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RIDreview",
            "description": "<p>id</p> "
          }
        ]
      }
    },
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminProductReviewUpdate",
    "title": "adminProductReviewUpdate",
    "name": "adminProductReviewUpdate",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RIDreview",
            "description": "<p>id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CUSTOMER_NAME",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "LOCATION",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RATING",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SUBJECT",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MESSAGE",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "BLOG_URL",
            "description": ""
          }
        ]
      }
    },
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminProductSelectorDetail",
    "title": "adminProductSelectorDetail",
    "name": "adminProductSelectorDetail",
    "group": "admin",
    "description": "<p>a product selector is a relative pointer to a grouping of products.</purpose></p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "selector",
            "description": "<p>NAVCAT=.safe.path NAVCAT=$list CSV=pid1,pid2,pid3 CREATED=YYYYMMDD|YYYYMMDD RANGE=pid1|pid2 MANAGECAT=/path/to/category SEARCH=saerchterm PROFILE=xyz SUPPLIER=xyz MFG=xyx ALL=your_base_are_belong_to_us</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Array",
            "optional": false,
            "field": "@products",
            "description": "<p>an array of product id&#39;s</p> "
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
    "url": "adminProductUpdate",
    "title": "adminProductUpdate",
    "name": "adminProductUpdate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pidpid",
            "description": "<p>: an A-Z|0-9|-|_ -- max length 20 characters, case insensitive</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "%attribs",
            "description": "<p>[ &#39;attribute&#39;:&#39;value&#39;, &#39;anotherattrib&#39;:&#39;value&#39; ]</p> <example> %attribs:[ &#39;attribute&#39;:&#39;value&#39;, &#39;anotherattrib&#39;:&#39;value&#39; ] </example>"
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
    "url": "adminProjectClone",
    "title": "adminProjectClone",
    "name": "adminProjectClone",
    "group": "admin",
    "description": "<p>TODO Not finished</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminProjectCreate",
    "title": "adminProjectCreate",
    "name": "adminProjectCreate",
    "group": "admin",
    "description": "<p>TODO Not finished</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminProjectDetail",
    "title": "adminProjectDetail",
    "name": "adminProjectDetail",
    "group": "admin",
    "description": "<p>TODO Not finished</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminProjectGitMacro",
    "title": "adminProjectGitMacro",
    "name": "adminProjectGitMacro",
    "group": "admin",
    "description": "<p>TODO Not finished</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminProjectList",
    "title": "adminProjectList",
    "name": "adminProjectList",
    "group": "admin",
    "description": "<p>returns a list of projectsTODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminProjectRemove",
    "title": "adminProjectRemove",
    "name": "adminProjectRemove",
    "group": "admin",
    "description": "<p>TODO Not finished</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminProjectUpdate",
    "title": "adminProjectUpdate",
    "name": "adminProjectUpdate",
    "group": "admin",
    "description": "<p>TODO Not finished</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminPublicFileDelete",
    "title": "adminPublicFileDelete",
    "name": "adminPublicFileDelete",
    "group": "admin",
    "description": "<p>Public files are hosted at a URL and can be downloaded, they are usually things like short videos, etc. TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "fileguidguid",
            "description": "<p>from fileupload</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "filename",
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
    "url": "adminPublicFileList",
    "title": "adminPublicFileList",
    "name": "adminPublicFileList",
    "group": "admin",
    "description": "<p>Public files are hosted at a URL and can be downloaded, they are usually things like short videos, etc. TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "fileguidguid",
            "description": "<p>from fileupload</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "filename",
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
    "url": "adminPublicFileUpload",
    "title": "adminPublicFileUpload",
    "name": "adminPublicFileUpload",
    "group": "admin",
    "description": "<p>Public files are hosted at a URL and can be downloaded, they are usually things like short videos, etc. TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "fileguidguid",
            "description": "<p>from fileupload</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "filename",
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
    "url": "adminRSSClone",
    "title": "adminRSSClone",
    "name": "adminRSSClone",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CPG",
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
    "url": "adminRSSCreate",
    "title": "adminRSSCreate",
    "name": "adminRSSCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "feed_title",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "feed_link",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "feed_link_override",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "feed_subject",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "max_products",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "cycle_interval",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "schedule",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "profile",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "list",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "image_h",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "image_w",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "translation",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "coupon",
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
    "url": "adminRSSDetail",
    "title": "adminRSSDetail",
    "name": "adminRSSDetail",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminRSSList",
    "title": "adminRSSList",
    "name": "adminRSSList",
    "group": "admin",
    "description": "<p>returns a list of projectsTODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminRSSRemove",
    "title": "adminRSSRemove",
    "name": "adminRSSRemove",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CPG",
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
    "url": "adminRSSUpdate",
    "title": "adminRSSUpdate",
    "name": "adminRSSUpdate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CPG",
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
    "url": "adminReportDownload",
    "title": "adminReportDownload",
    "name": "adminReportDownload",
    "group": "admin",
    "description": "<p>Inside &quot;$R&quot; (the REPORT object) there are following output values:</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSOGComplete",
    "title": "adminSOGComplete",
    "name": "adminSOGComplete",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSOGCreate",
    "title": "adminSOGCreate",
    "name": "adminSOGCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "%sogjson",
            "description": "<p>nested sog structure</p> "
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
    "url": "adminSOGDetail",
    "title": "adminSOGDetail",
    "name": "adminSOGDetail",
    "group": "admin",
    "description": "<p>Returns a list of Store Option Groups (SOGs), see the SOG xml format for more specific information.TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "idsog-id",
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
    "url": "adminSOGList",
    "title": "adminSOGList",
    "name": "adminSOGList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSOGUpdate",
    "title": "adminSOGUpdate",
    "name": "adminSOGUpdate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "%sogjson",
            "description": "<p>nested sog structure</p> "
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
    "url": "adminSupplierCreate",
    "title": "adminSupplierCreate",
    "name": "adminSupplierCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSupplierDetail",
    "title": "adminSupplierDetail",
    "name": "adminSupplierDetail",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "VENDORID6-8",
            "description": "<p>digit supplier/vendor id</p> "
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
    "url": "adminSupplierList",
    "title": "adminSupplierList",
    "name": "adminSupplierList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSupplierMacro",
    "title": "adminSupplierMacro",
    "name": "adminSupplierMacro",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSupplierOrderItemList",
    "title": "adminSupplierOrderItemList",
    "name": "adminSupplierOrderItemList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "FILTER",
            "description": "<p>OPEN</p> "
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
    "url": "adminSupplierOrderList",
    "title": "adminSupplierOrderList",
    "name": "adminSupplierOrderList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "VENDORID6-8",
            "description": "<p>digit supplier/vendor id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "FILTER",
            "description": "<p>UNCONFIRMED|RECENT</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DETAIL",
            "description": "<p>1|0 includes an optional @ORDERDETAIL in response</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "optional": false,
            "field": "@ORDERS",
            "description": "<p>detail about the vendor/supplier orders</p> "
          },
          {
            "group": "Response",
            "optional": false,
            "field": "@ORDERDETAIL",
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
    "url": "adminSupplierProductList",
    "title": "adminSupplierProductList",
    "name": "adminSupplierProductList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSupplierRemove",
    "title": "adminSupplierRemove",
    "name": "adminSupplierRemove",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "VENDORID6-8",
            "description": "<p>digit supplier/vendor id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "products0",
            "description": "<p>|1</p> "
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
    "url": "adminSyndicationAMZLogs",
    "title": "adminSyndicationAMZLogs",
    "name": "adminSyndicationAMZLogs",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DSTmarketplace",
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@ROWS",
            "description": "<pre><code>[ pid, sku, feed, ts, msgtype, msg ] </code></pre>"
          }
        ]
      }
    },
    "description": "<p>returns up to 1000 products where the amazon error flag is set in the SKU Lookup table.TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSyndicationAMZOrders",
    "title": "adminSyndicationAMZOrders",
    "name": "adminSyndicationAMZOrders",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DSTAMZ",
            "description": ""
          }
        ]
      }
    },
    "description": "<p>displays orders created in the last 50 days which have not been flagged as fulfilled/processed. TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSyndicationAMZThesaurii",
    "title": "adminSyndicationAMZThesaurii",
    "name": "adminSyndicationAMZThesaurii",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DSTAMZ",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@CATEGORIES",
            "description": "<pre><code>[ safename, prettyname, thesauruskey, thesaurusvalue ] </code></pre>"
          }
        ]
      }
    },
    "description": "<p>store categories may have one or more amazon thesauruses associated with it a thesaurus helps amazon classify a product similar to a category+tag might in other systems.     for example &#39;color&#39; &#39;navy&#39; in the amazon system might be equivalent to &#39;color&#39; &#39;blue&#39; when somebody does a search, but not &#39;color&#39; &#39;teal&#39; (which might also map to both blue/green).     a single category may have many thesaurus keys/values. TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSyndicationBUYDownloadDBMaps",
    "title": "adminSyndicationBUYDownloadDBMaps",
    "name": "adminSyndicationBUYDownloadDBMaps",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DSTBUY",
            "description": "<p>|BST</p> "
          }
        ]
      }
    },
    "description": "<p>buy.com/bestbuy.com have support for json dbmaps, which allow uses to create ad-hoc schema that maps existing product attributes to buy.com data.     since buy.com product feeds are no longer sent in an automated fasion the utility of this feature is somewhat limited, but can still be used to perform additional validation     during/prior to export.     each dbmap has a 1-8 digit code, and associated json (which uses a modified flexedit syntax).     each product would then have a corresponding buycom:dbmap or bestbuy:dbmap field set. TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSyndicationDebug",
    "title": "adminSyndicationDebug",
    "name": "adminSyndicationDebug",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DSTmarketplace",
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "FEEDTYPEPRODUCT",
            "description": "<p>|INVENTORY</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PID",
            "description": "<p>PRODUCTID</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "HTMLHtml",
            "description": "<p>messaging describing the syndication process + any errors</p> "
          }
        ]
      }
    },
    "description": "<p>runs the syndication process in realtime and returns an html response describing &#39;what happened&#39;TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSyndicationDetail",
    "title": "adminSyndicationDetail",
    "name": "adminSyndicationDetail",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DSTmarketplace",
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p> "
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
    "url": "adminSyndicationFeedErrors",
    "title": "adminSyndicationFeedErrors",
    "name": "adminSyndicationFeedErrors",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DSTmarketplace",
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@ROWS",
            "description": "<pre><code>[ timestamp1, sku1, feedtype1, errcode1, errmsg1, batchjob#1 ], [ timestamp2, sku2, feedtype2, errcode2, errmsg2, batchjob#2 ], </code></pre>"
          }
        ]
      }
    },
    "description": "<p>displays up to 500 to remove/hide these.TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSyndicationHistory",
    "title": "adminSyndicationHistory",
    "name": "adminSyndicationHistory",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DSTmarketplace",
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@ROWS",
            "description": "<pre><code>[ msgtype1, timestamp1, message1 ], [ msgtype2, timestamp2, message2 ], </code></pre>"
          }
        ]
      }
    },
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSyndicationList",
    "title": "adminSyndicationList",
    "name": "adminSyndicationList",
    "group": "admin",
    "description": "<p>returns a list of marketplaces and their configuration statusTODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSyndicationListFiles",
    "title": "adminSyndicationListFiles",
    "name": "adminSyndicationListFiles",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DSTmarketplace",
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@FILES",
            "description": "<pre><code>{ FILENAME, FILETYPE, GUID } </code></pre>"
          }
        ]
      }
    },
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSyndicationMacro",
    "title": "adminSyndicationMacro",
    "name": "adminSyndicationMacro",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DSTmarketplace",
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@updates",
            "description": ""
          }
        ]
      }
    },
    "description": "<p>DELETE     ENABLE     DISABLE     UNSUSPEND     CLEAR-FEED-ERRORS     SAVE?fields=from&amp;input=form     DBMAP-NUKE?MAPID=     DBMAP-SAVE?MAPID=&amp;CATID=&amp;STOREID=&amp;MAPTXT=     AMZ-THESAURUS-DELETE?guid=     AMZ-THESAURUS-SAVE?name=&amp;guid=&amp;search_terms&amp;itemtype=&amp;subjectcontent&amp;targetaudience&amp;isgiftwrapavailable&amp;     AMZ-SHIPPING-SAVE?Standard=XXX&amp;Expedited=XXY&amp;Scheduled=XXZ&amp;NextDay=XYY&amp;SecondDay=XYZ     AMZ-TOKEN-UPDATE?marketplaceId=&amp;merchantId=</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminSyndicationPublish",
    "title": "adminSyndicationPublish",
    "name": "adminSyndicationPublish",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "DSTmarketplace",
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "FEEDTYPEPRODUCT",
            "description": "<p>|INVENTORY</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "JOBID",
            "description": ""
          }
        ]
      }
    },
    "description": "<p>creates a batch job for publishingTODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminTOXMLSetFavorite",
    "title": "adminTOXMLSetFavorite",
    "name": "adminTOXMLSetFavorite",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "formatWRAPPER",
            "description": "<p>|LAYOUT|EMAIL</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "docid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "favoritetrue",
            "description": "<p>|false</p> "
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
    "url": "adminTaskComplete",
    "title": "adminTaskComplete",
    "name": "adminTaskComplete",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminTaskCreate",
    "title": "adminTaskCreate",
    "name": "adminTaskCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "INFO",
            "description": "<p>|WARN|ERROR|SETUP|TODO        ## SETUP = setup tasks, TODO=user created.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "titl",
            "description": "<p>100 character short message</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>long description</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "errcode",
            "description": "<p>AMZ#1234,EBAY#1234,        ## see %TODO::CODES below</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "dstcode",
            "description": "<p>GOO check SYNDICATION.pm for dstcodes</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>order:####-##-###|product:ABC|ticket:1234&quot; or: ticket=&gt;$ticketid, order=&gt;$oid, pid=&gt;$pid,        ## this is preferred because it will set other fields.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "guid",
            "description": "<p>$related_private_file_guid|$bj-&gt;guid(),</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "priority",
            "description": "<p>1|2|3        ## you don&#39;t need to set this unless you want to override 1=high,2=warn,3=error</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>another way of referencing errcode.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "panel",
            "description": "<p>the name of the panel which contains a tutorial video (for SETUP tasks)</p> "
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
    "url": "adminTaskDetail",
    "title": "adminTaskDetail",
    "name": "adminTaskDetail",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminTaskList",
    "title": "adminTaskList",
    "name": "adminTaskList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "class",
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
    "url": "adminTaskRemove",
    "title": "adminTaskRemove",
    "name": "adminTaskRemove",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "taskid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>+dstcode</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "class",
            "description": "<p>+panel</p> "
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
    "url": "adminTaskUpdate",
    "title": "adminTaskUpdate",
    "name": "adminTaskUpdate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminTechnicalRequest",
    "title": "adminTechnicalRequest",
    "name": "adminTechnicalRequest",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "METHODCREATE",
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
    "url": "adminTemplateCreateFrom",
    "title": "adminTemplateCreateFrom",
    "name": "adminTemplateCreateFrom",
    "group": "admin",
    "description": "<p>copies from a container into a templateTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CONTAINERIDebay",
            "description": "<p>profile or campaign id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "TYPEEBAY",
            "description": "<p>|CPG|CIA|APP</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PROJECTIDoptional",
            "description": "<p>(defaults to TEMPLATES)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SUBDIR",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "files",
            "description": "<h1 id=\"of-files-copied\">of files copied</h1> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "dirs",
            "description": "<h1 id=\"of-sub-directories-copied\">of sub-directories copied</h1> "
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
    "url": "adminTemplateDetail",
    "title": "adminTemplateDetail",
    "name": "adminTemplateDetail",
    "group": "admin",
    "description": "<p>displays the details of a TEMPLATETODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "TYPEEBAY",
            "description": "<p>|CPG|CIA|APP</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PROJECTID",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SUBDIR",
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
    "url": "adminTemplateInstall",
    "title": "adminTemplateInstall",
    "name": "adminTemplateInstall",
    "group": "admin",
    "description": "<p>installs a template into a containerTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CONTAINERIDebay",
            "description": "<p>profile or campaign id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "TYPEEBAY",
            "description": "<p>|CPG|CIA|APP</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PROJECTIDoptional",
            "description": "<p>(defaults to TEMPLATES)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SUBDIR",
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
    "url": "adminTemplateList",
    "title": "adminTemplateList",
    "name": "adminTemplateList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CONTAINERIDebay",
            "description": "<p>profile or campaign id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "TYPEEBAY",
            "description": "<p>|CPG|CIA|APP</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@TEMPLATES",
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
    "url": "adminTicketCreate",
    "title": "adminTicketCreate",
    "name": "adminTicketCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "disposition",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "callback",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "private",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "priority",
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
    "url": "adminTicketDetail",
    "title": "adminTicketDetail",
    "name": "adminTicketDetail",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminTicketFileAttach",
    "title": "adminTicketFileAttach",
    "name": "adminTicketFileAttach",
    "group": "admin",
    "description": "<p>ticketid, uuid</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminTicketFileGet",
    "title": "adminTicketFileGet",
    "name": "adminTicketFileGet",
    "group": "admin",
    "description": "<p>download a file attached to a ticket.</purpose></p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ticketid",
            "description": "<p>ticket #</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "remote",
            "description": "<p>remote stored filename obtained from @FILES[] in adminTicketFileList</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "orig",
            "description": "<p>original (uploaded) file name obtained from @FILES[] in adminTicketFileList</p> "
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
    "url": "adminTicketFileList",
    "title": "adminTicketFileList",
    "name": "adminTicketFileList",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminTicketFileRemove",
    "title": "adminTicketFileRemove",
    "name": "adminTicketFileRemove",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminTicketList",
    "title": "adminTicketList",
    "name": "adminTicketList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>open|all|projects|waiting</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@FILES",
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
    "url": "adminTicketMacro",
    "title": "adminTicketMacro",
    "name": "adminTicketMacro",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminUIBuilderPanelExecute",
    "title": "adminUIBuilderPanelExecute",
    "name": "adminUIBuilderPanelExecute",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "subEDIT",
            "description": "<p>|SAVE|SAVE-EDIT</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "idelement",
            "description": "<p>id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "panelPanel",
            "description": "<p>Identifier (the &#39;id&#39; field returned by adminUIProductList</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "html",
            "description": "<p>the html content of the product editor panel</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "js",
            "description": "<p>the js which is required by the panel.</p> "
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
    "url": "adminUIExecuteCGI",
    "title": "adminUIExecuteCGI",
    "name": "adminUIExecuteCGI",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "uri/biz/setup/shipping/index.cgi",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "%vars",
            "description": "<p>{ x:1, y:2, z:3 }</p> "
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
    "url": "adminUIMediaLibraryExecute",
    "title": "adminUIMediaLibraryExecute",
    "name": "adminUIMediaLibraryExecute",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "verbLOAD",
            "description": "<p>|SAVE</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "src",
            "description": "<p>(required for LOAD|SAVE)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "IMG",
            "description": "<p>(required for SAVE)</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "IMG",
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
    "url": "adminVendorCreate",
    "title": "adminVendorCreate",
    "name": "adminVendorCreate",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminVendorDetail",
    "title": "adminVendorDetail",
    "name": "adminVendorDetail",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminVendorMacro",
    "title": "adminVendorMacro",
    "name": "adminVendorMacro",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminVendorRemove",
    "title": "adminVendorRemove",
    "name": "adminVendorRemove",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminVendorSearch",
    "title": "adminVendorSearch",
    "name": "adminVendorSearch",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminVendorUpdate",
    "title": "adminVendorUpdate",
    "name": "adminVendorUpdate",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminVersionCheck",
    "title": "adminVersionCheck",
    "name": "adminVersionCheck",
    "group": "admin",
    "description": "<p>Checks the clients version and compatibility level against the API&#39;s current compatibility level.TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "client",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "stationid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "subuser",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "localip",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "osver",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "finger",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "DATA",
            "description": "<p>[ RESPONSE can be either</p> <ul> <li>OKAY - proceed with normal</li> <li>FAIL - a reason for the failure</li> <li>WARN - a warning, but it is okay to proceed ]]&gt;<example>&lt;![CDATA[ ConfigVersion Response ResponseMsg ]]&gt;</example></li> </ul> "
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
    "url": "adminWarehouseDetail",
    "title": "adminWarehouseDetail",
    "name": "adminWarehouseDetail",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "adminWarehouseInventoryQuery",
    "title": "adminWarehouseInventoryQuery",
    "name": "adminWarehouseInventoryQuery",
    "group": "admin",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "GEO",
            "description": "<p>geocode of warehouse</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "SKU",
            "description": "<p>SKU to filter by</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "SKUS",
            "description": "<p>SKU1,SKU2,SKU3 to filter by</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "LOC",
            "description": "<p>LOC to filter by</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@ROWS",
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
    "url": "adminWarehouseList",
    "title": "adminWarehouseList",
    "name": "adminWarehouseList",
    "group": "admin",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@WAREHOUSES",
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
    "url": "adminWarehouseMacro",
    "title": "adminWarehouseMacro",
    "name": "adminWarehouseMacro",
    "group": "admin",
    "description": "<p>to create/update/delete/modify (via macro) the wms systemTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "WAREHOUSE",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@updates",
            "description": "<p>an array of cmd objects</p> <example>&lt;![CDATA[ *  ]]&gt;</example>"
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
    "url": "appSupplierAuthorize",
    "title": "appSupplierAuthorize",
    "name": "appSupplierAuthorize",
    "group": "admin",
    "description": "<p>hashpass is generated by computing the md5 or sha1 hexadecimal value of the concatenation  of both the plain text password, and the _cartid. Here are some examples (all examples assume password is &#39;secret&#39; and  the cartid is &#39;:1234&#39;  MySQL: md5(concat(&#39;secret&#39;,&#39;:1234&#39;)) = 1ed15901cfc0cb8c61b43a440d853d45 MySQL: sha1(concat(&#39;secret&#39;,&#39;:1234&#39;)) = d9bc94d9c90e5de7a1c43a34f262d348244e9505</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p>(must start with a &#39;:&#39;) as returned by appSupplierInit</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "hashtype",
            "description": "<p>md5|sha1</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "hashpass",
            "description": "<p>hashtype(password+_cartid)</p> "
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
    "url": "appSupplierInit",
    "title": "appSupplierInit",
    "name": "appSupplierInit",
    "group": "admin",
    "description": "<p>Allow an external supplier to authorize to commerceRack (NOT FULLY IMPLEMENTED)</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "supplierxyz\\@domain.com",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "password1234",
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
    "url": "billingInvoiceDetail",
    "title": "billingInvoiceDetail",
    "name": "billingInvoiceDetail",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "billingInvoiceList",
    "title": "billingInvoiceList",
    "name": "billingInvoiceList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "billingPaymentList",
    "title": "billingPaymentList",
    "name": "billingPaymentList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "billingPaymentMacro",
    "title": "billingPaymentMacro",
    "name": "billingPaymentMacro",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "billingTransactions",
    "title": "billingTransactions",
    "name": "billingTransactions",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "admin"
  },
  {
    "type": "POST",
    "url": "bossRoleCreate",
    "title": "bossRoleCreate",
    "name": "bossRoleCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "tag",
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
    "url": "bossRoleDelete",
    "title": "bossRoleDelete",
    "name": "bossRoleDelete",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "tag",
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
    "url": "bossRoleList",
    "title": "bossRoleList",
    "name": "bossRoleList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "tag",
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
    "url": "bossRoleUpdate",
    "title": "bossRoleUpdate",
    "name": "bossRoleUpdate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "tag",
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
    "url": "bossUserCreate",
    "title": "bossUserCreate",
    "name": "bossUserCreate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "tag",
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
    "url": "bossUserDelete",
    "title": "bossUserDelete",
    "name": "bossUserDelete",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "tag",
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
    "url": "bossUserDetail",
    "title": "bossUserDetail",
    "name": "bossUserDetail",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "tag",
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
    "url": "bossUserList",
    "title": "bossUserList",
    "name": "bossUserList",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "tag",
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
    "url": "bossUserUpdate",
    "title": "bossUserUpdate",
    "name": "bossUserUpdate",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "tag",
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
    "url": "getKeywordAutoComplete",
    "title": "getKeywordAutoComplete",
    "name": "getKeywordAutoComplete",
    "group": "admin",
    "description": "<p><strong> Deprecated </strong> don&#39;t use this, use elasticsearch instead. returns a list of matching possible keywords (note: currently disabled pending rewrite)</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "catalog",
            "description": "<hint> pass value of catalog=TESTING to always generate an auto-complete result </hint>"
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
    "url": "getMerchandising",
    "title": "getMerchandising",
    "name": "getMerchandising",
    "group": "admin",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "onal",
            "defaultValue": "1",
            "description": "<p>id=&quot;category .some.path|.some.other.path</p> "
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
    "url": "adminSEOInit",
    "title": "adminSEOInit",
    "name": "API__adminSEOInit",
    "group": "app",
    "description": "<p>Starts an SEO SessionTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appSEOFetch",
    "title": "appSEOFetch",
    "name": "API__appSEOFetch",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@OBJECTS",
            "description": "<p>[ { type:&quot;product&quot;, pid:&quot;&quot; }, { type:&quot;product&quot;, pid:&quot;&quot;, noindex:&quot;1&quot;, xyz:&quot;abc&quot; }, { type:&quot;navcat&quot;, pid:&quot;&quot; } ]</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appSEOStore",
    "title": "appSEOStore",
    "name": "API__appSEOStore",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_escaped_fragment_",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "html",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
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
    "url": "appBuyerAuthenticate",
    "title": "appBuyerAuthenticate",
    "name": "appBuyerAuthenticate",
    "group": "app",
    "description": "<p>Authenticates a buyer against an enabled/supported trust serviceTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "authfacebook",
            "description": "<p>|google</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "create0",
            "description": "<p>|1</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>when auth=facebook</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "id_token",
            "description": "<p>required for auth=google, only id_token or access_token are required (but both can safely be passed)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>required for auth=google, only id_token or access_token are required (but both can safely be passed)</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CID",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appBuyerCreate",
    "title": "appBuyerCreate",
    "name": "appBuyerCreate",
    "group": "app",
    "description": "<p>create a buyer account (currently requires form=wholesale) long term goal is to support flexible <em>per project</em> account signups w/parameters TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "formwholesale",
            "description": "<note> See adminCustomerUpdate for a full list of macros </note>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appBuyerDeviceRegistration",
    "title": "appBuyerDeviceRegistration",
    "name": "appBuyerDeviceRegistration",
    "group": "app",
    "description": "<p>verify or create a client registrationTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "verbverifyonly",
            "description": "<p>|create</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "deviceidclient",
            "description": "<p>generated device key (guid), or well known identifier from device</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "osandroid",
            "description": "<p>|appleios</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "onal",
            "defaultValue": "1",
            "description": "<p>id=&quot;devicetokendevicetoken (appleios) or registrationid (android) is required      (to avoid religious debatesboth are equivalent -- either is acceptable)</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "CIDclient",
            "description": "<p>id</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appBuyerExists",
    "title": "appBuyerExists",
    "name": "appBuyerExists",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p>login=email address</p> <p>buyer: returns a positive number if buyer exists, or zero if it does not.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appBuyerLogin",
    "title": "appBuyerLogin",
    "name": "appBuyerLogin",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "methodunsecure",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "loginemail",
            "description": "<p>address</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "passwordclear",
            "description": "<p>text password</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "cidcustomer",
            "description": "<p>id</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "scheduleschedule",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appBuyerPasswordRecover",
    "title": "appBuyerPasswordRecover",
    "name": "appBuyerPasswordRecover",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "methodemail",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appCaptchaGet",
    "title": "appCaptchaGet",
    "name": "appCaptchaGet",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p><errors></p> <p><err id=\"10000\" type=\"apperr\">Profile %s could not be loaded.</err></p> <p><err id=\"10001\" type=\"apperr\">Profile request was blank/empty.</err></p> <p><err id=\"10002\" type=\"apperr\">No profile was requested.</err> </errors></p> <note><strong>*</strong> NOT FINISHED <em>**</em></note>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appCartCreate",
    "title": "appCartCreate",
    "name": "appCartCreate",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "cartDetail",
            "description": "<hint> You should take care to maintain your cart in a local persisent cookie.<br>This is <em>your</em> responsibility to pass this value on subsequent requests. (use appCartExists to test to see if it&#39;s valid) </hint>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appCartExists",
    "title": "appCartExists",
    "name": "appCartExists",
    "group": "app",
    "description": "<p>This call tells if a cart/session has been previously created/saved. Since release 201314 it is not necessary to use because cart id&#39;s can now be created on the fly by an app.TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "exists",
            "description": "<p>1/0</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appCategoryDetail",
    "title": "appCategoryDetail",
    "name": "appCategoryDetail",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "safe.safe.path",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>fast|more|max</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@subcategoryDetail",
            "description": "<p>detail:more or detail:max</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "exists",
            "description": "<p>1|0</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "pretty",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "%meta",
            "description": "<p>[ &quot;dst&quot;:&quot;value&quot;, &quot;dst&quot;:&quot;value&quot; ]</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@products",
            "description": "<p>[pid1,pid2,pid3]  detail=fast is the same as detail=more</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "subcategoryCount",
            "description": "<h1 id=\"of-children\">of children</h1> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@subcategories",
            "description": "<p>[ &#39;.safe.sub1&#39;, &#39;safe.sub2&#39;, &#39;.safe.sub3&#39; ];</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "[",
          "content": "\t[\n\t[ 'id':'.safe.sub1', 'pretty':'Sub Category 1', '@products':['pid1','pid2','pid3'] ],\n\t[ 'id':'.safe.sub2', 'pretty':'Sub Category 2', '@products':['pid1','pid2','pid3'] ],\n\t];",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "<errors>",
          "content": "<errors>\n\t<err id=\"8001\" type=\"warning\">Requested Category does not exist.</err>\n</errors>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appCategoryList",
    "title": "appCategoryList",
    "name": "appCategoryList",
    "group": "app",
    "description": "<p>TODO</p> <note>Accepts no parameters</note>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "root",
            "description": "<p>.root.category.path</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@paths",
            "description": "<p>[&#39;.&#39;,&#39;.safe1&#39;,&#39;.safe2&#39;]</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appCheckoutDestinations",
    "title": "appCheckoutDestinations",
    "name": "appCheckoutDestinations",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appConfig",
    "title": "appConfig",
    "name": "appConfig",
    "group": "app",
    "description": "<p>TODO</p> <note>Accepts no parameters</note>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appEmailSend",
    "title": "appEmailSend",
    "name": "appEmailSend",
    "group": "app",
    "description": "<p>TODO</p> <caution>a single ip is limited to 25 emails in a 24 hour period.</caution>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "method",
            "description": "<p>tellafriend</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "product",
            "description": "<p>for &quot;method:tellafriend&quot; productid</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "recipient",
            "description": "<p>for &quot;method:tellafriend&quot; user@someotherdomain.com</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appEventAdd",
    "title": "appEventAdd",
    "name": "appEventAdd",
    "group": "app",
    "description": "<p>User events are the facility for handling a variety of &quot;future&quot; and &quot;near real time&quot; backend operations. Each event has a name that describes what type of object it is working with ex: CART, ORDER, PRODUCT, CUSTOMER then a period, and what happened (or should happen in the future) ex: CART.GOTSTUFF, ORDER.CREATED, PRODUCT.CHANGED custom program code can be associated with a users account to &quot;listen&quot; for specific events and then take action. TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>CART.REMARKET</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "pid",
            "description": "<p>product id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "pids",
            "description": "<p>multiple product id&#39;s (comma separated)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "safe",
            "description": "<p>category id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "sku",
            "description": "<p>inventory id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "cid",
            "description": "<p>customer(buyer) id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>customer email</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "more",
            "description": "<p>a user defined field (for custom events)</p> <note>in addition each event generated will record: sdomain, ip, and cartid</note>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>to create a future event, a unique identifier (cart id will be used if not specified)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "dispatch_gmt",
            "description": "<p>to create a future event an epoch timestamp when the future event should dispatch</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appFAQs",
    "title": "appFAQs",
    "name": "appFAQs",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "filter-keywords",
            "description": "<p>keywords</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "filter-topic",
            "description": "<p>id</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "method",
            "description": "<p>&quot;default:all&quot; topics|detail|all</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": true,
            "field": "@topics",
            "description": "<p>&quot;method:topics|all&quot; an array of faq topics</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": true,
            "field": "@detail",
            "description": "<p>&quot;method:detail|all&quot; an array of detail faq data for topics</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appGiftcardValidate",
    "title": "appGiftcardValidate",
    "name": "appGiftcardValidate",
    "group": "app",
    "description": "<p>TODO</p> <caution>a single ip is limited to 25 requests in a 24 hour period.</caution>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "giftcard",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
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
    "url": "appNavcatDetail",
    "title": "appNavcatDetail",
    "name": "appNavcatDetail",
    "group": "app",
    "description": "<p>see adminNavcatDetail (identical)</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appNewsletterList",
    "title": "appNewsletterList",
    "name": "appNewsletterList",
    "group": "app",
    "description": "<p>shows all publically available newsletters/listsTODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appPageGet",
    "title": "appPageGet",
    "name": "appPageGet",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PATH",
            "description": "<p>.path.to.page or @CAMPAIGNID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@get",
            "description": "<p>[ &#39;attrib1&#39;, &#39;attrib2&#39;, &#39;attrib3&#39; ]</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "all",
            "description": "<p>set to 1 to return all fields (handy for json libraries which don&#39;t return @get=[])</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "%page",
            "description": "<p>[ &#39;attrib1&#39;:&#39;xyz&#39;, &#39;attrib2&#39;:&#39;xyz&#39; ],</p> <note>leave @get empty @get = [] for all page attributes</note>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appPageSet",
    "title": "appPageSet",
    "name": "appPageSet",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "PATH",
            "description": "<p>.path.to.page or @CAMPAIGNID</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "%page",
            "description": "<p>an associative array of values you want updated</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "attrib",
            "description": "<note>leave @get empty @get = [] for all page attributes</note>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appPaymentMethods",
    "title": "appPaymentMethods",
    "name": "appPaymentMethods",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "onal",
            "defaultValue": "1",
            "description": "<p>id=&quot;countryISO country cod</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@methods",
            "description": "<example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appProductCategories",
    "title": "appProductCategories",
    "name": "appProductCategories",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pidproductid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "showOnlyCategories1",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "detailless",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@categories",
            "description": "<p>[ &#39;.safe.path.1&#39;, &#39;.safe.path.2&#39; ];</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appProductGet",
    "title": "appProductGet",
    "name": "appProductGet",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pidproductid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "verversion",
            "description": "<p>#</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "withVariations1",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "withInventory1",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "withSchedule1",
            "description": "<p><note>NOT IMPLEMENTED: navcatsPlease=1 = showOnlyCategories=1</note></p> <p><example> [     &#39;pid&#39; : product-id,     &#39;%attribs&#39; : [ &#39;zoovy:prod_name&#39;=&gt;&#39;xyz&#39; ],     &#39;@variations&#39; : [ JSON POG OBJECT ],     &#39;@inventory&#39; : [ &#39;sku1&#39; : [ &#39;inv&#39;:1, &#39;res&#39;:2 ], &#39;sku2&#39; : [ &#39;inv&#39;:3, &#39;res&#39;:4 ] ], ] </example></p> <p><caution> This does not apply schedule pricing. </caution></p> <hint> to tell if a product exists check the value &quot;zoovy:prod_created_gmt&quot;. It will not exist, or be set to zero if the product has been deleted or does not exist OR is not  accessible on the current partition. </hint>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appProductList",
    "title": "appProductList",
    "name": "appProductList",
    "group": "app",
    "description": "<p>deprecatedTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "srcnavcat",
            "description": "<p>:.path.to.safename</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "srcsearch",
            "description": "<p>:keywords</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "srccart",
            "description": "<p>:</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@products",
            "description": "<p>[&#39;pid1&#39;,&#39;pid2&#39;,&#39;pid3&#39;]</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appProductSelect",
    "title": "appProductSelect",
    "name": "appProductSelect",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "product_selector",
            "description": "<p>navcat=.path.to.safename CSV=pid1,pid2,pid3 CREATED=STARTYYYMMDD|ENDYYYMMDD RANGE=pid1|pid2 MANAGECAT=/managecat SEARCH=keyword PROFILE=PROFILE</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@products",
            "description": "<p>[&#39;pid1&#39;,&#39;pid2&#39;,&#39;pid3&#39;]</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appProfileInfo",
    "title": "appProfileInfo",
    "name": "appProfileInfo",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "profile",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p><note>Returns: profile data in key value format. </note></p> <errors> <err id=\"10000\" type=\"apperr\">Profile %s could not be loaded.</err> <err id=\"10001\" type=\"apperr\">Profile request was blank/empty.</err> <err id=\"10002\" type=\"apperr\">No profile was requested.</err> </errors>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appPublicSearch",
    "title": "appPublicSearch",
    "name": "appPublicSearch",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "typeproduct",
            "description": "<p>|faq|blog</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>[&#39;product&#39;,&#39;blog&#39;]</p> <note>if not specified then: type:_all is assumed.</note> <note>www.elasticsearch.org/guide/reference/query-dsl/</note>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "modeelastic-search",
            "description": "<p>,elastic-count,elastic-msearch, elastic-mlt,elastic-suggest,elastic-explain,elastic-scroll,elastic-scroll-helper,elastic-scroll-clear</p> <p><hint> elastic-search: a query or filter search, this is probably what you want. elastic-count: same parameters as query or search, but simply returns a count of matches elastic-msearch: a method for passing multiple pipelined search requests (ex: multiple counts) in one call elastic-mlt: &quot;More Like This&quot; uses field/terms to find other documents (ex: products) which are similar elastic-suggest: used to run did-you-mean or search-as-you-type suggestion requests,      which can also be run as part of a &quot;search()&quot; request.</p> <h1 id=\"http-www-elasticsearch-org-guide-en-elasticsearch-reference-current-search-suggesters-completion-html\"><a href=\"http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-suggesters-completion.html\">http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-suggesters-completion.html</a></h1> <p>elastic-explain: explains why the specified document did or did not match a query, and how the relevance score was calculated.  elastic-scroll,elastic-scroll-helper,elastic-scroll-clear: used to interate through scroll results using a scroll_id</p> <p><a href=\"http://search.cpan.org/~drtech/Search-Elasticsearch-1.10/lib/Search/Elasticsearch/Client/Direct.pm\">http://search.cpan.org/~drtech/Search-Elasticsearch-1.10/lib/Search/Elasticsearch/Client/Direct.pm</a> </a></p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "filter",
            "description": "<p>mode &quot;mode:elastic-*&quot; id=&quot;filter { &#39;term&#39;:{ &#39;profile&#39;:&#39;DEFAULT&#39; } };</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "query",
            "description": "<p>mode &quot;mode:elastic-*&quot; id=&quot;query {&#39;text&#39;:{ &#39;profile&#39;:&#39;DEFAULT&#39; } };</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "mode",
            "description": "<p>&quot;mode:elastic-mlt&quot; id=&quot;id the document id you want to use for the mlt operation</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>100 # number of results</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>[&#39;_score&#39;,&#39;base_price&#39;,&#39;prod_name&#39;]</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "from",
            "description": "<p>100    # start from result # 100</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "scroll",
            "description": "<p>30s,1m,5m</p> <note> &lt;![CDATA[ Filter is an exact match, whereas query is a token/substring match - filter is MUCH faster and should be used when the exact value is known (ex: tags, profiles, upc, etc.)  <ul> KNOWN KEYS: <em> pid </em> skus: [ &#39;PID:ABCD&#39;, &#39;PID:ABCE&#39; ] <em> options : [ &#39;Size: Large&#39;, &#39;Size: Medium&#39;, &#39;Size: Small&#39; ] </em> pogs: [ &#39;AB&#39;, &#39;ABCD&#39;, &#39;ABCE&#39; ] <em> tags: [ IS_FRESH, IS_NEEDREVIEW, IS_HASERRORS, IS_CONFIGABLE, IS_COLORFUL, IS_SIZEABLE, IS_OPENBOX, IS_PREORDER, IS_DISCONTINUED, IS_SPECIALORDER, IS_BESTSELLER, IS_SALE, IS_SHIPFREE, IS_NEWARRIVAL, IS_CLEARANCE, IS_REFURB, IS_USER1, ..] </em> images: [ &#39;path/to/image1&#39;, &#39;path/to/image2&#39; ] <em> ean, asin, upc, fakeupc, isbn, prod_mfgid </em> accessory_products: [ &#39;PID1&#39;, &#39;PID2&#39;, &#39;PID3&#39; ] <em> related_products: [ &#39;PID1&#39;, &#39;PID2&#39;, &#39;PID3&#39; ] </em> base_price: amount<em>100 (so $1.00 = 100) </em> keywords: [ &#39;word1&#39;, &#39;word2&#39;, &#39;word3&#39; ] <em> assembly: [ &#39;PID1&#39;, &#39;PID2&#39;, &#39;PID3&#39; ], </em> prod_condition: [ &#39;NEW&#39;, &#39;OPEN&#39;, &#39;USED&#39;, &#39;RMFG&#39;, &#39;RFRB&#39;, &#39;BROK&#39;, &#39;CRAP&#39; ] <em> prod_name, description, detail </em> prod_features <em> prod_is </em> prod_mfg <em> profile </em> salesrank </ul> ]]&gt; </note>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@products",
            "description": "<p>an array of product ids</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@LOG",
            "description": "<p>an array of strings explaining how the search was performed (if LOG=1 or TRACEPID non-blank)</p> <caution> Using LOG=1 or TRACEPID in a product (non debug) environment will result in the search feature being disabled on a site. </caution>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appResource",
    "title": "appResource",
    "name": "appResource",
    "group": "app",
    "description": "<ul> <li>shipcodes.json</li> <li>shipcountries.json</li> <li>payment_status.json</li> <li>flexedit.json </li> <li>review_status.json : a complete list of all valid review codes</li> <li>integrations.json : used to identify the MKT values in syndication/orders</li> <li>email_macros.json : </li> <li>inventory_conditions.json : a complete list of all inventory conditions</li> <li>ups_license.json :</li> <li>syndication_buy_storecodes.json</li> <li>syndication_buy_categories.json</li> <li>syndication_wsh_categories.json</li> <li>syndication_goo_categories.json</li> <li>definitions/amz/[catalog].json : replace [catalog] with contents of amz:catalog field.</li> </ul> <p>NOTE: You may also request filename.yaml or filename.xml (and the corresponding xml: or yaml: format will be returned)</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>filename.json</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>content to eval</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appReviewAdd",
    "title": "appReviewAdd",
    "name": "appReviewAdd",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pidproductid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "SUBJECT",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "RATING",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CUSTOMER_NAME",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "LOCATION",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MESSAGE",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "BLOG_URL",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appReviewsList",
    "title": "appReviewsList",
    "name": "appReviewsList",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "pidproductid",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appSEOFinish",
    "title": "appSEOFinish",
    "name": "appSEOFinish",
    "group": "app",
    "description": "<p>Makes the token live, generates sitemap.xml based on submitted objectsTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appSEORewriteDebug",
    "title": "appSEORewriteDebug",
    "name": "appSEORewriteDebug",
    "group": "app",
    "description": "<p>Starts an SEO SessionTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@log",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appSearchLogList",
    "title": "appSearchLogList",
    "name": "appSearchLogList",
    "group": "app",
    "description": "<p>lists available search log filesTODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appSearchLogRemove",
    "title": "appSearchLogRemove",
    "name": "appSearchLogRemove",
    "group": "app",
    "description": "<p>permanently remove/delete all search logsTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "FILE",
            "description": "<p>reference file id</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appSendMessage",
    "title": "appSendMessage",
    "name": "appSendMessage",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "msgtype",
            "description": "<p>feedback</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "sender",
            "description": "<p>user@domain.com   [the sender of the message]</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>subject of the message</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>body of the message</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PRODUCT",
            "description": "<p>product-id-this-tellafriend-is-about</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "OID",
            "description": "<p>2012-01-1234  [the order this feedback is about]</p> <note> msgtype:feedback requires &#39;sender&#39;, but ignores &#39;recipient&#39; msgtype:tellafriend requires &#39;recipient&#39;, &#39;product&#39; msgtype:tellafriend requi &#39;product&#39; </note>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appShippingTransitEstimate",
    "title": "appShippingTransitEstimate",
    "name": "appShippingTransitEstimate",
    "group": "app",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@products",
            "description": "<p>[pid1,pid2,pid3]</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ship_postal",
            "description": "<p>92012</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ship_country",
            "description": "<p>US</p> <note></note>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@Services",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "ships_yyyymmdd",
            "description": "<p>which day the order is expected to ship (not arrive)</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "cutoff_hhmm",
            "description": "<p>hour and minute (pst) that the order must be placed by</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "latency_days",
            "description": "<p>maximum days before order ships</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "{",
          "content": "                           {\n                             'arrival_time' => '23:00:00',\n                             'amzcc' => 'UPS',\n                             'UPS.Service.Description' => 'UPS Ground',\n                             'UPS.EstimatedArrival.DayOfWeek' => 'TUE',\n                             'carrier' => 'UPS',\n                             'expedited' => '0',\n                             'UPS.Guaranteed' => 'Y',\n                             'method' => 'UPS Ground',\n                             'code' => 'UGND',\n                             'ups' => 'GND',\n                             'arrival_date' => '20120715',\n                             'amzmethod' => 'UPS Ground',\n                             'buycomtc' => '1',\n                             'upsxml' => '03',\n                             'UPS.EstimatedArrival.PickupDate' => '2012-07-10',\n                             'transit_days' => 5\n                           }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appStash",
    "title": "appStash",
    "name": "appStash",
    "group": "app",
    "description": "<p>store a keyTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>key you want to store</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>value you want to store</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "appSuck",
    "title": "appSuck",
    "name": "appSuck",
    "group": "app",
    "description": "<p>retrieve a keyTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>key you want to store</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>value you want to store</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "app"
  },
  {
    "type": "POST",
    "url": "buyerAddressAddUpdate",
    "title": "buyerAddressAddUpdate",
    "name": "buyerAddressAddUpdate",
    "group": "buyer",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<notes> &lt;![CDATA[ shortcut:tag for this address ex: &#39;HOME&#39; (must be unique within bill or ship)  type:bill     bill/countrycode:US     bill/email:user@domain     bill/firstname:     bill/lastname:     bill/fullname:     bill/phone:     bill/state:     bill/zip:   type:ship<br>    ship/address1:     ship/address2:     ship/city:     ship/countrycode:US     ship/fullname:     ship/firstname:     ship/lastname:     ship/phone:     ship/region:     ship/postal:  NOTE: (fullname) or (firstname lastname) NOTE: (country) or (countrycode)  ]]&gt; </notes>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerAddressDelete",
    "title": "buyerAddressDelete",
    "name": "buyerAddressDelete",
    "group": "buyer",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p>Returns:</p> <CODE> type:SHIP|BILL shortcut:DEFAULT </CODE>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerAddressList",
    "title": "buyerAddressList",
    "name": "buyerAddressList",
    "group": "buyer",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p>Returns:</p> <CODE>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerDetail",
    "title": "buyerDetail",
    "name": "buyerDetail",
    "group": "buyer",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerLogout",
    "title": "buyerLogout",
    "name": "buyerLogout",
    "group": "buyer",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerNotificationAdd",
    "title": "buyerNotificationAdd",
    "name": "buyerNotificationAdd",
    "group": "buyer",
    "description": "<p>Used to register a buyer for a notification when a inventory is back in stock.TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>inventory</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>&quot;type:inventory&quot; ex: user@somedomain.com</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "sku",
            "description": "<p>&quot;type:inventory&quot; sku</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "msgid",
            "description": "<p>&quot;type:inventory&quot; msgid</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerOrderGet",
    "title": "buyerOrderGet",
    "name": "buyerOrderGet",
    "group": "buyer",
    "description": "<p>Grabs a raw order object (buyer perspective) so that status information can be displayed.  TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<hint>In order to access an order status the user must either be an authenticated buyer, OR use softauth=order with cartid + either orderid or erefid</hint>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "softauthorder",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "erefid",
            "description": "<p>(conditionally-required for softauth=order) external reference identifier (ex: ebay sale #) or amazon order #</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>(conditionally-required for softauth=order) internal zoovy order #</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "cartid",
            "description": "<p>(conditionally-required for softauth=order) internal cartid #</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerOrderPaymentAdd",
    "title": "buyerOrderPaymentAdd",
    "name": "buyerOrderPaymentAdd",
    "group": "buyer",
    "description": "<p>Adds and processes a new payment transaction on an order. TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "orderid2012-01-1234",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "tenderCREDIT",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "amt",
            "description": "<p>(optional - will default to order balance_due) transaction amount</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>(optional - will be autogenerated if not supplied) unique identifier for this transaction</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "payment.cc",
            "description": "<p>(required on tender=CREDIT) Credit card #</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "payment.yy",
            "description": "<p>(required on tender=CREDIT) Credit card Expiration Year</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "payment.mm",
            "description": "<p>(required on tender=CREDIT) Credit card Expiration Month</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "payment.cv",
            "description": "<p>(required on tender=CREDIT) Credit card CVV/CID #</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerOrderUpdate",
    "title": "buyerOrderUpdate",
    "name": "buyerOrderUpdate",
    "group": "buyer",
    "description": "<p>A macro is a set of commands that will be applied to an order, they are useful because they are applied (whenever possible) as a single atomic transaction. buyers have access to a subset of macros from full order processing, but enough to adjust payment, and in some cases cancel orders. TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "orderid2012-01-1234",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@updatessee",
            "description": "<p>example below</p> <p><note> This uses the same syntax as adminCartMacro adminOrderMacro, but only a subset are supported (actually at this point ALL commands are supported, but we&#39;ll restrict this eventually),  and may (eventually) differ based on business logic and/or add some custom ones.  </note></p> <example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerPasswordUpdate",
    "title": "buyerPasswordUpdate",
    "name": "buyerPasswordUpdate",
    "group": "buyer",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p>password:newpassword</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerProductListAppendTo",
    "title": "buyerProductListAppendTo",
    "name": "buyerProductListAppendTo",
    "group": "buyer",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p>listid= sku= OPTIONAL:     qty=(will default to zero)     priority=# (will defualt to zero)     note=    (optional string up to 255 characters)     replace=1    (will delete any existing value from the list, and re-add this one)</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerProductListDetail",
    "title": "buyerProductListDetail",
    "name": "buyerProductListDetail",
    "group": "buyer",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p>listid:</p> <example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerProductListRemoveFrom",
    "title": "buyerProductListRemoveFrom",
    "name": "buyerProductListRemoveFrom",
    "group": "buyer",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p>listid= sku=</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerProductLists",
    "title": "buyerProductLists",
    "name": "buyerProductLists",
    "group": "buyer",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerPurchaseHistory",
    "title": "buyerPurchaseHistory",
    "name": "buyerPurchaseHistory",
    "group": "buyer",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "onal",
            "defaultValue": "1",
            "description": "<p>id=&quot;POOL RECENT,COMPLETED, etc.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerPurchaseHistoryDetail",
    "title": "buyerPurchaseHistoryDetail",
    "name": "buyerPurchaseHistoryDetail",
    "group": "buyer",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<caution> This can ONLY be used for authenticated buyers. </caution>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerTicketCreate",
    "title": "buyerTicketCreate",
    "name": "buyerTicketCreate",
    "group": "buyer",
    "description": "<p>creates a new ticket for a customer TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerTicketList",
    "title": "buyerTicketList",
    "name": "buyerTicketList",
    "group": "buyer",
    "description": "<p>shows a list of ticket for a buyer TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerTicketUpdate",
    "title": "buyerTicketUpdate",
    "name": "buyerTicketUpdate",
    "group": "buyer",
    "description": "<p>updates a ticket for a buyer TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerUpdate",
    "title": "buyerUpdate",
    "name": "buyerUpdate",
    "group": "buyer",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "@updates",
            "description": "<p>Returns:</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerWalletAdd",
    "title": "buyerWalletAdd",
    "name": "buyerWalletAdd",
    "group": "buyer",
    "description": "<p>creates a new wallet for the associated buyerTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CCCredit",
            "description": "<p>Card #</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "YY2",
            "description": "<p>Digit Year</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "MM2",
            "description": "<p>Digit Month</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "IP4",
            "description": "<p>digit numeric ip address</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "IDwallet",
            "description": "<p>id # (on success)</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerWalletDelete",
    "title": "buyerWalletDelete",
    "name": "buyerWalletDelete",
    "group": "buyer",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p>walletid:#####</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerWalletList",
    "title": "buyerWalletList",
    "name": "buyerWalletList",
    "group": "buyer",
    "description": "<p>Displays a list of walletsTODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@walletsan",
            "description": "<p>array of wallets</p> <p><code type=\"json\" title=\"@wallets sample output\"> [     { ID:walletid1, IS_DEFAULT:1|0, DESCRIPTION:description },     { ID:walletid2, IS_DEFAULT:1|0, DESCRIPTION:description },     { ID:walletid3, IS_DEFAULT:1|0, DESCRIPTION:description }, ] </code></p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "buyerWalletSetPreferred",
    "title": "buyerWalletSetPreferred",
    "name": "buyerWalletSetPreferred",
    "group": "buyer",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": "<p>walletid:#####</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "buyer is cool"
  },
  {
    "type": "POST",
    "url": "cartAmazonPaymentURL",
    "title": "cartAmazonPaymentURL",
    "name": "cartAmazonPaymentURL",
    "group": "cart",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "shipping",
            "description": "<p>1|0     (prompt for shipping address)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "CancelUrl",
            "description": "<p>URL to redirect user to if cancel is pressed.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "ReturnUrl",
            "description": "<p>URL to redirect user to upon order completion</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "YourAccountUrl",
            "description": "<p>URL where user can be directed to by amazon if they wish to lookup order status. (don&#39;t stree about this, rarely used)</p> <hint> &lt;![CDATA[ Returns parameters necessary for CBA interaction:  merchantid: the checkout by amazon assigned merchantid (referred to as [merchantid] in the example below) b64xml: a base64 encoded xml order object based on the current cart geometry referred to as [b64xml], BUT passed to amazon following &quot;order:&quot; signature: a sha1, base64 encoded concatenation of the b64xml and the configured cba secret key refrerred to as [signature] in the example below, AND passed to amazon following &quot;signature:&quot; aws-access-key-id: a public string cba needs to identify this merchant refrred to as [aws-access-key-id] AND passed to amazon following the &quot;aws-access-key-id:&quot; parameter  To generate/create a payment button, suggested parameters are: color: orange, size: small, background: white <a href=\"https://payments.amazon.com/gp/cba/button?ie=UTF8&amp;color=[color]&amp;background=[background]&amp;size=[size\">https://payments.amazon.com/gp/cba/button?ie=UTF8&amp;color=[color]&amp;background=[background]&amp;size=[size</a>] ex: <a href=\"https://payments.amazon.com/gp/cba/button?ie=UTF8&amp;color=orange&amp;background=white&amp;size=small\">https://payments.amazon.com/gp/cba/button?ie=UTF8&amp;color=orange&amp;background=white&amp;size=small</a> Use this as the <strong>your button image url</strong> in the example.  The [formurl] is created by the developer using the merchant id, specify either sandbox or non-sandbox (live): <a href=\"https://payments.amazon.com/checkout/[merchantid\">https://payments.amazon.com/checkout/[merchantid</a>] <a href=\"https://payments-sandbox.amazon.com/checkout/[merchantid]?debug=true\">https://payments-sandbox.amazon.com/checkout/[merchantid]?debug=true</a> ]]&gt; </hint>  <example title=\"Example\">&lt;![CDATA[  &lt;!- NOTE: you do NOT need to include jquery if you already are using jquery -&gt; <script type=\"text/javascript\" src=\"https://images-na.ssl-images-amazon.com/images/G/01/cba/js/jquery.js\"></script>  <script type=\"text/javascript\" src=\"https://images-na.ssl-images-amazon.com/images/G/01/cba/js/widget/widget.js\"></script> <form method=POST action=\"https://payments.amazon.com/checkout/[merchantid]\"> <input type=\"hidden\" name=\"order-input\" value=\"type:merchant-signed-order/aws-accesskey/1;order:[b64xml];signature:[signature];aws-access-key-id:[aws-access-key-id]\"> <input type=\"image\" id=\"cbaImage\" name=\"cbaImage\" src=\"**your button image url**\" onClick=\"this.form.action='[formurl]'; checkoutByAmazon(this.form)\"> </form>  ]]&gt; </example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartCSRShortcut",
    "title": "cartCSRShortcut",
    "name": "cartCSRShortcut",
    "group": "cart",
    "description": "<p>Returns a 4-6 digit authorization token that can be used by a  call center operator to identify a session.  CSR shortcuts are only valid for approximately 10 minutes.TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "csr",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartCheckoutValidate",
    "title": "cartCheckoutValidate",
    "name": "cartCheckoutValidate",
    "group": "cart",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "sender",
            "description": "<p>stage (LOGIN,BILLING_LOCATION,SHIPPING_LOCATION,ORDER_CONFIRMATION,ADMIN)</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@issues",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartCouponAdd",
    "title": "cartCouponAdd",
    "name": "cartCouponAdd",
    "group": "cart",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "coupon",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartDetail",
    "title": "cartDetail",
    "name": "cartDetail",
    "group": "cart",
    "description": "<p>Lists the contents/settings in a cart along with summary valuesTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "create1/0",
            "description": "<ul> <li>shall we create a cart if the cart requested doesn&#39;t exit?</li> </ul> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartGiftcardAdd",
    "title": "cartGiftcardAdd",
    "name": "cartGiftcardAdd",
    "group": "cart",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "giftcard",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartGoogleCheckoutURL",
    "title": "cartGoogleCheckoutURL",
    "name": "cartGoogleCheckoutURL",
    "group": "cart",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "analyticsdata",
            "description": "<p>(required, but may be blank) obtained by calling getUrchinFieldValue()  in the pageTracker or _gaq Google Analytics object.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "edit_cart_url",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "continue_shopping_url",
            "description": "<hint> &lt;![CDATA[ Google has extensive documentation on it&#39;s checkout protocols, you need use buttons served by google. MORE INFO: <a href=\"http://code.google.com/apis/checkout/developer/index.html#google_checkout_buttons\">http://code.google.com/apis/checkout/developer/index.html#google_checkout_buttons</a>  NOTE: googleCheckoutMerchantId is passed in the config.js if it&#39;s blank, the configuration is incomplete and don&#39;t try using it as a payment method.  To select a button you will need to know the merchant id (which is returned by this call), the style and variant type of the button. Examples are provided below so hopefully you can skip reading it!  You must use their button(s). Possible: style: white|trans, Possible variant: text|disable ]]&gt; </hint>  <caution> &lt;![CDATA[ note: if one or more items in the cart has &#39;gc:blocked&#39; set to true - then google checkout button must be shown as DISABLED using code below: <a href=\"https://checkout.google.com/buttons/checkout.gif?merchant_id=[merchantid]&amp;w=160&amp;h=43&amp;style=[style]&amp;variant=[variant]&amp;loc=en_US\">https://checkout.google.com/buttons/checkout.gif?merchant_id=[merchantid]&amp;w=160&amp;h=43&amp;style=[style]&amp;variant=[variant]&amp;loc=en_US</a>  These are Googles branding guidelines, hiding the button (on a website) can lead to stern reprimand and even termination from  Google programs such as &quot;trusted merchant&quot;. ]]&gt; </caution>  <hint> &lt;![CDATA[ Here is example HTML that would be used with the Asynchronous Google Analytics tracker (_gaq).  <a href=\"javascript:_gaq.push(function() {    var pageTracker = _gaq._getAsyncTracker();setUrchinInputCode(pageTracker);});    document.location='$googlecheckout_url?analyticsdata='+getUrchinFieldValue();\"> <img height=43 width=160 border=0      src=\"https://checkout.google.com/buttons/checkout.gif?merchant_id=[merchantid]&w=160&h=43&style=[style]&variant=[variant]&loc=en_US\"     ></a> ]]&gt; </hint>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "googleCheckoutMerchantId",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "URL",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartItemAppend",
    "title": "cartItemAppend",
    "name": "cartItemAppend",
    "group": "cart",
    "description": "<p>TODO</p> ",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartItemUpdate",
    "title": "cartItemUpdate",
    "name": "cartItemUpdate",
    "group": "cart",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "stidxyz",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "uuidxyz",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "quantity1",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_msgs",
            "description": "<p>(contains a count of the number of messages)</p> <errors> <err id=\"9101\" type=\"cfgerr\">Item cannot be added to cart due to price not set.</err> <err id=\"9102\" type=\"cfgerr\">could not lookup pogs</err> <err id=\"9103\" type=\"cfgerr\">Some of the items in this kit are not available for purchase: </err> <err id=\"9000\" type=\"cfgerr\">Unhandled item detection error</err> <err id=\"9001\" type=\"cfgerr\">Product xyz is no longer available</err> <err id=\"9002\" type=\"cfgerr\">Product xyz has already been purchased</err> </errors>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartItemsInventoryVerify",
    "title": "cartItemsInventoryVerify",
    "name": "cartItemsInventoryVerify",
    "group": "cart",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "trace",
            "description": "<p>0|1    (optional)</p> <example> %changes = [     [ sku1: newqty, sku2:newqty ]     ] </example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartOrderCreate",
    "title": "cartOrderCreate",
    "name": "cartOrderCreate",
    "group": "cart",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "iama",
            "description": "<p>some string that makes sense to you</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>2011-01-1234</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "payment",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "_uuid",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartOrderStatus",
    "title": "cartOrderStatus",
    "name": "cartOrderStatus",
    "group": "cart",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>2011-01-1234</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "payment",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartPaymentQ",
    "title": "cartPaymentQ",
    "name": "cartPaymentQ",
    "group": "cart",
    "description": "<p>Manipulate or display the PaymentQ (a list of payment types for a given cart/order)TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>reset|delete|insert|sync</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ID",
            "description": "<p>required for cmd=delete|insert</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "TN",
            "description": "<p>required for cmd=insert ex: CASH|CREDIT|PO|etc.</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "AMOUNT",
            "description": "<p>(passed as variable $$) optional for cmd=insert (max to charge on this payment method)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "TWO_DIGIT_TENDER_VARIABLES",
            "description": "<p>required for cmd=insert, example: CC, MM, YY, CV for credit card</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "paymentQ",
            "description": "<p>[].ID    unique id # for this</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartPaypalSetExpressCheckout",
    "title": "cartPaypalSetExpressCheckout",
    "name": "cartPaypalSetExpressCheckout",
    "group": "cart",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "useMobile0",
            "description": "<p>|1 (if true - we&#39;ll tell paypal to use the mobile version)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "onal",
            "defaultValue": "1",
            "description": "<p>id=&quot;drt&#39;device token&#39; - obtain them from the native IOS paypal library (not required, but useful)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "getBuyerAddress",
            "description": "<p>0|1 (if true - paypal will ask shopper for address)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "cancelURL",
            "description": "<p>&#39;&#39;   (required, but may be blank for legacy checkout)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "returnURL",
            "description": "<p>&#39;&#39;     (required, but may be blank for legacy checkout)</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "URL",
            "description": "<p>url to redirect checkout to (checkout will finish with legacy method, but you CAN build your own)</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "TOKEN",
            "description": "<p>paypal token</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "ACK",
            "description": "<p>paypal &quot;ACK&quot; message</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "ERR",
            "description": "<p>(optional message from paypal api)</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "_ADDRESS_CHANGED",
            "description": "<p>1|0</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "_SHIPPING_CHANGED",
            "description": "<p>methodid (the new value of CART-&gt;ship.selected_id)</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartPromoCodeAdd",
    "title": "cartPromoCodeAdd",
    "name": "cartPromoCodeAdd",
    "group": "cart",
    "description": "<p>TODO</p> <note>A promo code can be either a giftcard, or a coupon (we&#39;ll detect which it is)</note>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "promocode",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartSet",
    "title": "cartSet",
    "name": "cartSet",
    "group": "cart",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
  },
  {
    "type": "POST",
    "url": "cartShippingMethods",
    "title": "cartShippingMethods",
    "name": "cartShippingMethods",
    "group": "cart",
    "description": "<p>TODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "trace0",
            "description": "<p>|1    (optional)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "update0",
            "description": "<p>|1 (optional - defaults to 0): set the shipping address, etc. in the cart to the new values.</p> <p><hint> in cart the following pieces of data must be set:     data.ship_address     data.ship_country     data.ship_zip     data.ship_state </hint></p> <example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "cart"
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
    "url": "getSearchCatalogs",
    "title": "getSearchCatalogs",
    "name": "getSearchCatalogs",
    "group": "site",
    "description": "<p>This is the old search catalog interface, don&#39;t use this, it will be removed. use elasticsearch instead.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          }
        ]
      }
    },
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
    "url": "ping",
    "title": "ping",
    "name": "ping",
    "group": "site",
    "description": "<p>TODO</p> <note>Accepts: nothing</note> <note>Returns: (nothing of importance)</note>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "pong",
            "description": "<p>1</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "site"
  },
  {
    "type": "POST",
    "url": "platformInfo",
    "title": "platformInfo",
    "name": "platforminfo",
    "group": "site",
    "description": "<p>Utility FunctionTODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<h6 id=\"-\">#</h6> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "media-host",
            "description": "<h6 id=\"-\">#</h6> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "api-max-version",
            "description": "<h6 id=\"-\">#</h6> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "api-min-version",
            "description": "<h6 id=\"-\">#</h6> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "api-our-version",
            "description": "<h6 id=\"-\">#</h6> <hint> Time is an epoch timestamp (which represents the number of seconds since midnight january 1st, 1970) </hint>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "site"
  },
  {
    "type": "POST",
    "url": "searchResult",
    "title": "searchResult",
    "name": "searchResult",
    "group": "site",
    "description": "<p>This is deprecated, it is the old legacy search system. Don&#39;t use this, it will be removed.</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "_cartid",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "KEYWORDS",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "MODE",
            "description": "<p>EXACT|STRUCTURED|AND|OR</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "CATALOG",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "PRT",
            "description": "<p>0</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ISOLATION_LEVEL",
            "description": "<p>0-9</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "ROOT",
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "LOG",
            "description": "<p>1 (dianostic)</p> "
          },
          {
            "group": "Request",
            "type": "String",
            "optional": true,
            "field": "TRACE",
            "description": "<p>PID productid</p> "
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@products",
            "description": "<p>an array of product ids</p> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "@LOG",
            "description": "<p>an array of strings explaining how the search was performed (if LOG=1 or TRACEPID non-blank)</p> <caution> Using LOG=1 or TRACEPID in a product (non debug) environment will result in the search feature being disabled on a site. </caution>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "site"
  },
  {
    "type": "POST",
    "url": "canIUse",
    "title": "canIUse",
    "name": "canIUse",
    "group": "utility",
    "description": "<p>Utility function which checks access to a specific bundle ex: CRM, XSELLTODO</p> ",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "flag",
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "allowed",
            "description": "<p>1|0</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "utility"
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
  },
  {
    "type": "POST",
    "url": "time",
    "title": "time",
    "name": "time",
    "group": "utility",
    "description": "<p>Utility/Diagnostic FunctionTODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "unix",
            "description": "<h6 id=\"-\">#</h6> <hint> Unix is an epoch timestamp (which represents the number of seconds since midnight january 1st, 1970) </hint>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "utility"
  },
  {
    "type": "POST",
    "url": "whereAmI",
    "title": "whereAmI",
    "name": "whereAmI",
    "group": "utility",
    "description": "<p>Utility function that returns the city/state/zip of the IP making the call.TODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "utility"
  },
  {
    "type": "POST",
    "url": "whoAmI",
    "title": "whoAmI",
    "name": "whoAmI",
    "group": "utility",
    "description": "<p>Utility function that returns who the current session is authenticated as.TODO</p> ",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "cid",
            "description": "<h4 id=\"-customer-buyer-id-\">(customer [buyer] id)</h4> "
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user@fromloggedindomain.com</p> <hint> If logged in as an admin sessino you&#39;ll get fun stuff like USERNAME,MID,RESELLER and more. </hint>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm",
    "groupTitle": "utility"
  }
] });