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