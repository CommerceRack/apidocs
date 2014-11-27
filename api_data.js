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
    "name": "adminCIAgentZipDownload",
    "group": "JSONAPI_pm",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "name": "adminCampaignZipDownload",
    "group": "JSONAPI_pm",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "name": "adminEBAYProfileZipDownload",
    "group": "JSONAPI_pm",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "name": "adminFileContents",
    "group": "JSONAPI_pm",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "name": "adminFileSave",
    "group": "JSONAPI_pm",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "name": "adminFileUpload",
    "group": "JSONAPI_pm",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "name": "adminSiteZipDownload",
    "group": "JSONAPI_pm",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "name": "adminZipDownload",
    "group": "JSONAPI_pm",
    "type": "",
    "url": "",
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
    "url": "appInteractInternalRedis",
    "title": "appInteractInternalRedis",
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
    "url": "API:",
    "title": "adminOrderReserve API: adminOrderReserve",
    "name": "API:_adminOrderReserve",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "count",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": ">urns",
            "optional": false,
            "description": "<p>an array, a list of order #&#39;s</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "API:",
    "title": "adminSEOInit API: adminSEOInit",
    "name": "API:_adminSEOInit",
    "group": "admin",
    "description": "<p>Starts an SEO SessionTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "token",
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
    "url": "API:",
    "title": "appSEOFetch API: appSEOFetch",
    "name": "API:_appSEOFetch",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@OBJECTS",
            "optional": false,
            "description": "<p>[{ type:&quot;product&quot;, pid:&quot;&quot; },{ type:&quot;product&quot;, pid:&quot;&quot;, noindex:&quot;1&quot;, xyz:&quot;abc&quot; },{ type:&quot;navcat&quot;, pid:&quot;&quot; }]</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "API:",
    "title": "appSEOFinish API: appSEOFinish",
    "name": "API:_appSEOFinish",
    "group": "admin",
    "description": "<p>Makes the token live, generates sitemap.xml based on submitted objectsTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "token",
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
    "url": "API:",
    "title": "appSEORewriteDebug API: appSEORewriteDebug",
    "name": "API:_appSEORewriteDebug",
    "group": "admin",
    "description": "<p>Starts an SEO SessionTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "url",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@log",
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
    "url": "API:",
    "title": "appSEOStore API: appSEOStore",
    "name": "API:_appSEOStore",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "_escaped_fragment_",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "html",
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
    "url": "adminAccountDetail",
    "title": "adminAccountDetail",
    "name": "adminAccountDetail",
    "group": "admin",
    "description": "<p>Generates a new securekey for a given client. You must be given a client code by Zoovy to use this.TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAffiliateCreate",
    "title": "adminAffiliateCreate",
    "name": "adminAffiliateCreate",
    "group": "admin",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAffiliateDetail",
    "title": "adminAffiliateDetail",
    "name": "adminAffiliateDetail",
    "group": "admin",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAffiliateList",
    "title": "adminAffiliateList",
    "name": "adminAffiliateList",
    "group": "admin",
    "description": "<p>returns a list of projectsTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAffiliateRemove",
    "title": "adminAffiliateRemove",
    "name": "adminAffiliateRemove",
    "group": "admin",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAffiliateUpdate",
    "title": "adminAffiliateUpdate",
    "name": "adminAffiliateUpdate",
    "group": "admin",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAppTicketCreate",
    "title": "adminAppTicketCreate",
    "name": "adminAppTicketCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAppTicketDetail",
    "title": "adminAppTicketDetail",
    "name": "adminAppTicketDetail",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAppTicketList",
    "title": "adminAppTicketList",
    "name": "adminAppTicketList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAppTicketMacro",
    "title": "adminAppTicketMacro",
    "name": "adminAppTicketMacro",
    "group": "admin",
    "description": "<p>TODO</p><ul><li>ADDNOTE?note=xyz&amp;private=1|0</li><li>ASK?</li><li>UPDATE?escalate=1|0&amp;class=PRESALE|POSTSALE|EXCHANGE|RETURN</li><li>CLOSE</li></ul>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAppTicketRemove",
    "title": "adminAppTicketRemove",
    "name": "adminAppTicketRemove",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAppTicketSearch",
    "title": "adminAppTicketSearch",
    "name": "adminAppTicketSearch",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "onal",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>id=&quot;lookupany string</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminBatchJobCleanup",
    "title": "adminBatchJobCleanup",
    "name": "adminBatchJobCleanup",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminBatchJobCreate",
    "title": "adminBatchJobCreate",
    "name": "adminBatchJobCreate",
    "group": "admin",
    "description": "<p>TODOguid:(optional)type: SYNDICATION|REPORT|UTILITY,etc.%vars: { variables based on type }</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminBatchJobDownload",
    "title": "adminBatchJobDownload",
    "name": "adminBatchJobDownload",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "GUID",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "base64",
            "optional": false,
            "description": ""
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
            "field": "MIME",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "body",
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
    "url": "adminBatchJobList",
    "title": "adminBatchJobList",
    "name": "adminBatchJobList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@JOBS",
            "optional": false,
            "description": "<p>type:job, id:####, guid:(guid), status:, title:</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminBatchJobParametersCreate",
    "title": "adminBatchJobParametersCreate",
    "name": "adminBatchJobParametersCreate",
    "group": "admin",
    "description": "<p>TODOUUID:(optional)TITLE: BATCH_EXEC: %vars: { variables based on type }PRIVATE : 1|0 (will only appear in list for this user)</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminBatchJobParametersList",
    "title": "adminBatchJobParametersList",
    "name": "adminBatchJobParametersList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "BATCH_EXEC",
            "optional": false,
            "description": "<p>&quot; value=&quot;</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@PARAMETERS",
            "optional": false,
            "description": "<p>[{ UUID:&quot;&quot;, TITLE:&quot;&quot;, BATCH_EXEC:&quot;&quot;, LASTRUN_TS:&quot;&quot;, LASTJOB_ID:&quot;&quot;, PRIVATE:1  }]</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminBatchJobParametersRemove",
    "title": "adminBatchJobParametersRemove",
    "name": "adminBatchJobParametersRemove",
    "group": "admin",
    "description": "<p>TODOUUID:(optional)</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminBatchJobStatus",
    "title": "adminBatchJobStatus",
    "name": "adminBatchJobStatus",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "MSGID",
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
            "field": "custom",
            "optional": false,
            "description": "<p>&quot; default=&quot;1&quot; optional=&quot;1set to zero to exclude custom macros</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "system",
            "optional": false,
            "description": "<p>&quot; default=&quot;1&quot; optional=&quot;1set to zero to exclude system macros (note: if a CUSTOM macro has been created with the same name it will NOT appear in the system list)</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@MACROS",
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
            "field": "%PRT",
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
            "field": "%PRT.PHONE",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "%PRT.DOMAIN",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "%PRT.MAILADDR",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "%PRT.EMAIL",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "%PRT.LINKSYNTAXAPP",
            "optional": false,
            "description": "<p>|VSTORE</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "MSGID",
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
            "field": "MSGID",
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
            "field": "@MSGS",
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
            "field": "MSGID",
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
            "field": "MSGID",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "%MSG",
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
            "field": "@MSGS",
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
            "field": "MSGID",
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
            "field": "FORMATHTML5",
            "optional": false,
            "description": "<p>|LEGACY</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "MSGIDORDER.CREATED",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "RECIEVEREMAIL",
            "optional": false,
            "description": "<p>|CUSTOMER|GCN|APNS|ADN</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "EMAIL",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1&quot; hint=&quot;only if RECIPIENT=EMAILuser@domain.com</p>"
          },
          {
            "group": "Request",
            "field": "{String",
            "optional": false,
            "description": "<p>}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "MSGID",
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
            "field": "NAME",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "GUID",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SCRIPT",
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
    "url": "adminCIEngineAgentDetail",
    "title": "adminCIEngineAgentDetail",
    "name": "adminCIEngineAgentDetail",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCIEngineAgentList",
    "title": "adminCIEngineAgentList",
    "name": "adminCIEngineAgentList",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCIEngineAgentRemove",
    "title": "adminCIEngineAgentRemove",
    "name": "adminCIEngineAgentRemove",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "NAME",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "GUID",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SCRIPT",
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
    "url": "adminCIEngineConfig",
    "title": "adminCIEngineConfig",
    "name": "adminCIEngineConfig",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCIEngineLogSearch",
    "title": "adminCIEngineLogSearch",
    "name": "adminCIEngineLogSearch",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCIEngineMacro",
    "title": "adminCIEngineMacro",
    "name": "adminCIEngineMacro",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCSRLookup",
    "title": "adminCSRLookup",
    "name": "adminCSRLookup",
    "group": "admin",
    "description": "<p>Lookups a 4-6 digit codeTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "csr",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "cartid",
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
            "field": "exportCATEGORY",
            "optional": false,
            "description": "<p>|REWRITES</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "lines",
            "optional": false,
            "description": "<h1 id=\"of-lines-in-the-file\">of lines in the file</h1>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "body",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "base64base64",
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
    "url": "adminCSVImport",
    "title": "adminCSVImport",
    "name": "adminCSVImport",
    "group": "admin",
    "description": "<p>&lt;![CDATA[This is a wrapper around the CSV file import available in the user interface.Creates an import batch job. Filetype may be one of the following:</p><ul><li>PRODUCT</li><li>INVENTORY</li><li>CUSTOMER</li><li>ORDER</li><li>CATEGORY</li><li>REVIEW</li><li>REWRITES</li><li>RULES</li><li>LISTINGS</li></ul><p>]]&gt;TODO</p><hint>The file type may also be overridden in the header. See the CSV import documentation for currentdescriptions of the file. </hint>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "filetypePRODUCT",
            "optional": false,
            "description": "<p>|INVENTORY|CUSTOMER|ORDER|CATEGORY|REVIEW|REWRITES|RULES|LISTINGS</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "fileguid",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1 (required if base64 not set) guid from fileupload</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "base64",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1 (required if fileguid not set) base64 encoded payload</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "headers",
            "optional": true,
            "description": "<p>any specific headers for the file import</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "JOBID",
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
    "url": "adminCampaign",
    "title": "adminCampaign",
    "name": "adminCampaign",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCampaign",
    "title": "adminCampaign",
    "name": "adminCampaign",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCampaignAvailableCoupons",
    "title": "adminCampaignAvailableCoupons",
    "name": "adminCampaignAvailableCoupons",
    "group": "admin",
    "description": "<p>a campaign can be associated with a couponTODO</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@COUPONS",
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
    "url": "adminCampaignCreate",
    "title": "adminCampaignCreate",
    "name": "adminCampaignCreate",
    "group": "admin",
    "description": "<p>Creates a new campaignTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CAMPAIGNID",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "TITLE",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SEND_EMAIL1",
            "optional": false,
            "description": "<p>|0</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SEND_APPLEIOS1",
            "optional": false,
            "description": "<p>|0</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SEND_ANDROID1",
            "optional": false,
            "description": "<p>|0</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SEND_FACEBOOK1",
            "optional": false,
            "description": "<p>|0</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SEND_TWITTER1",
            "optional": false,
            "description": "<p>|0</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SEND_SMS1",
            "optional": false,
            "description": "<p>|0</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "QUEUEMODEFRONT",
            "optional": false,
            "description": "<p>|BACK|OVERWRITE</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "EXPIRESYYYYMMDD",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "COUPONCODE",
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
    "url": "adminCampaignDetail",
    "title": "adminCampaignDetail",
    "name": "adminCampaignDetail",
    "group": "admin",
    "description": "<p>returns a campaign object in %CAMPAIGNTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CAMPAIGNID",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "%CAMPAIGN",
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
    "url": "adminCampaignMacro",
    "title": "adminCampaignMacro",
    "name": "adminCampaignMacro",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CPG",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "@updates",
            "optional": false,
            "description": "<ul><li>CPGCOPY</li><li>CPGTEST?</li><li>CPGSTART?STARTTS=timestamp</li><li>CPGSTOP?</li><li>SUBADD?email=</li><li>SUBDEL?email=</li></ul>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "CAMPAIGNIDcampaign",
            "optional": false,
            "description": "<p>id#</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCampaignUpdate",
    "title": "adminCampaignUpdate",
    "name": "adminCampaignUpdate",
    "group": "admin",
    "description": "<p>see adminCampaignCreate for parametersTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CPGcampaign",
            "optional": false,
            "description": "<p>id#</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminConfigDetail",
    "title": "adminConfigDetail",
    "name": "adminConfigDetail",
    "group": "admin",
    "description": "<p>to obtain detail on a configuration objectTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "orderinclude",
            "optional": false,
            "description": "<p>%ORDER in response (contains current order sequence #)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "wmsinclude",
            "optional": false,
            "description": "<p>%WMS in response</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "pluginsinclude",
            "optional": false,
            "description": "<p>@PLUGINS in response</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "erpinclude",
            "optional": false,
            "description": "<p>%ERP in response</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "invinclude",
            "optional": false,
            "description": "<p>%INVENTORY in response</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "prtsinclude",
            "optional": false,
            "description": "<p>@PRTS in response</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "paymentsinclude",
            "optional": false,
            "description": "<p>@PAYMENTS in response</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "shippinginclude",
            "optional": false,
            "description": "<p>%SHIPPING in response</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "shipmethodsinclude",
            "optional": false,
            "description": "<p>@SHIPMENTS in response</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "blastinclude",
            "optional": false,
            "description": "<p>%BLAST in response</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminConfigMacro",
    "title": "adminConfigMacro",
    "name": "adminConfigMacro",
    "group": "admin",
    "description": "<p>to create/update/delete/modify (via macro) a configuration objectTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "@updatesan",
            "optional": false,
            "description": "<p>array of cmd objects</p><example>&lt;![CDATA[<em> PLUGIN/SET?plugin=domain.com</em> PLUGIN/DATATABLE-(INSERT|EMPTY|REMOVE)?plugin=domain.com&amp;id=<em> BLAST/SET?from_email=</em> GLOBAL/WMS?active=1|0<em> GLOBAL/ERP?active=1|0</em> GLOBAL/ORDERID?start=####<em> GLOBAL/ACCOUNT?</em> GLOBAL/FLEXEDIT-SAVE?json=<em> GLOBAL/FLEXEDIT-FIELD-SET?attrib=xyz&amp;json=</em> GLOBAL/SITE-FIX         (not finished)<em> GLOBAL/ADD-RESERVED-DOMAIN?</em> GLOBAL/SEARCH?SYNONYMS=&amp;STOPWORDS=&amp;CHARACTERMAP=<em> GLOBAL/PARTITIONCREATE?name=&amp;domain=&amp;navcats=</em> GLOBAL/INVENTORY?inv_mode=1|3&amp;inv_website_remove=1|0<em> NOTIFICATION/DATATABLE-EMPTY?event=ENQUIRY.ORDER</em> NOTIFICATION/DATATABLE-INSERT?event=ENQUIRY.ORDER<em> CRM-CONFIG?ticket_number=&amp;sequence=&amp;email_cleanup&amp;email=</em> TAXRULES/EMPTY?tax_rules=<em> TAXRULES/INSERT?type=&amp;state=&amp;city=&amp;zipspan=&amp;zip4=&amp;country=&amp;intprovince=&amp;intzip=&amp;rate=&amp;zone=&amp;expires=</em> COUPON/INSERT?coupon=&amp;begins=YYYYMMDDHHMMSS&amp;expires=YYYYMMDDHHMMSS&amp;taxable=&amp;stackable=&amp;disabled=&amp;limiteduse=&amp;title=&amp;image=<em> COUPON/UPDATE?coupon=&amp;begins=YYYYMMDDHHMMSS&amp;expires=YYYYMMDDHHMMSS&amp;taxable=&amp;stackable=&amp;disabled=&amp;limiteduse=&amp;title=&amp;image=</em> COUPON/REMOVE?coupon=<em> PROMOTIONS?promotion_advanced=0|1</em> COUPON/RULESTABLE-EMPTY?coupon=<em> COUPON/RULESTABLE-REMOVE?coupon=</em> COUPON/RULESTABLE-MOVEUP?coupon=&amp;ID=<em> COUPON/RULESTABLE-MOVEDOWN?coupon=&amp;ID=</em> COUPON/RULESTABLE-INSERT?coupon=&amp;match=&amp;name=&amp;filter=&amp;exec=&amp;value=&amp;weight=&amp;matchvalue<em> SHIPPING/CONFIG?ship_origin=zip&amp;chkout_deny_ship_po&amp;ship_int_risk=&amp;ship_latency=&amp;ship_cutoff&amp;ship_blacklist=isox,isox,isox&amp;banned=type|match|ts\\ntype|match|ts</em> SHIPPING/BANNEDTABLE-EMPTY<em> SHIPPING/BANNEDTABLE-INSERT?type=&amp;match=&amp;created=</em> SHIPMETHOD/FEDEX-REGISTER?account=&amp;address1=&amp;address2=&amp;city=&amp;state=&amp;zip=&amp;country=&amp;firstname=&amp;lastname=&amp;company=&amp;phone=&amp;email=&amp;SUPPLIER=[optional]<em> SHIPMETHOD/UPSAPI-REGISTER?shipper_number=&amp;url=&amp;address1=&amp;address2=&amp;city=&amp;state=&amp;zip=&amp;country=&amp;company=&amp;phone=&amp;email=&amp;supplier=optional</em> SHIPMETHOD/UPDATE?provider=USPS&amp;usps_dom=&amp;usps_dom_handling&amp;usps_dom_ins&amp;usps_dom_insprice&amp;usps_int_priority=&amp;usps_int_express&amp;usps_int_expressg<em> SHIPMETHOD/UPDATE?provider=UPSAPI&amp;upsapii_dom&amp;upsapi_int&amp;supplier=</em> SHIPMETHOD/UPDATE?provider=FEDEX&amp;rates=&amp;dom=1|0&amp;int=1|0&amp;supplier=<em> SHIPMETHOD/UPDATE?provider=FLEX:CODE&amp;active=1|0&amp;rules=1|0&amp;region=&amp;name=&amp;carrier=&amp;</em> SHIPMETHOD/INSERT?provider=FLEX:CODE<em> SHIPMETHOD/REMOVE?provider=FLEX:CODE</em> SHIPMETHOD/DATATABLE-EMPTY&amp;provider=FLEX:CODE<em> SHIPMETHOD/DATATABLE-INSERT&amp;provider=FLEX:CODE&amp;key1=value1&amp;key2=value2</em> SHIPMETHOD/DATATABLE-REMOVE&amp;provider=FLEX:CODE&amp;guid=xyz<em> SHIPMETHOD/RULESTABLE-EMPTY?provider=&amp;table=</em> SHIPMETHOD/RULESTABLE-INSERT?provider=&amp;table=&amp;guid=&amp;name=&amp;filter=&amp;exec=&amp;match=&amp;value=&amp;schedule=&amp;<em> SHIPMETHOD/RULESTABLE-UPDATE?provider=&amp;table=&amp;guid=&amp;name=&amp;filter=&amp;exec=&amp;match=&amp;value=&amp;schedule=&amp;</em> SHIPMETHOD/RULESTABLE-REMOVE?provider=&amp;table=&amp;guid=&amp;name=&amp;filter=&amp;exec=&amp;match=&amp;value=&amp;schedule=&amp;<em> PAYMENT/OFFLINE?tender=CASH|GIFTCARD|PICKUP|CHECK|COD|CHKOD|PO|WIRE&amp;fee=&amp;instructions=&amp;payto=</em> PAYMENT/GATEWAY?tender=CC&amp;<em> PAYMENT/GATEWAY?tender=ECHECK&amp;</em> PAYMENT/WALLET-AMZPAY?tender=AMZPAY&amp;color=&amp;size=&amp;background&amp;env=0|1|2<em> PAYMENT/WALLET-GOOGLE?tender=GOOGLE&amp;google_key=&amp;google_merchantid=&amp;google_api_env=&amp;google_api_analytics=&amp;google_api_merchantcalc=&amp;google_dest_zip=&amp;google_int_shippolicy=&amp;google_pixelurls=&amp;google_tax_tables=</em> PAYMENT/WALLET-PAYPALEC?tender=PAYPALEC&amp;paypal_api_env&amp;paypal_api_reqconfirmship&amp;paypal_api_callbacks&amp;paypal_email&amp;paypal_api_user&amp;paypal_api_pass&amp;paypal_api_sig&amp;paypal_paylater&amp;* PAYMENT/CUSTOM?tender=CUSTOM&amp;description=]]&gt;</example>"
          }
        ]
      }
    },
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
    "url": "adminCustomerCreate",
    "title": "adminCustomerCreate",
    "name": "adminCustomerCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "@updates",
            "optional": false,
            "description": "<p>&lt;![CDATA[</p><ul><li>CREATE?email=see adminCustomerUpdate]]&gt;</li></ul>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "*C",
            "optional": false,
            "description": "<p>Customer Object</p><example>&lt;![CDATA[example needed.]]&gt;</example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCustomerDetail",
    "title": "adminCustomerDetail",
    "name": "adminCustomerDetail",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CIDCustomer",
            "optional": false,
            "description": "<p>IDadminCustomerDetail supports additional parameters:</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "newsletters1",
            "optional": false,
            "description": "<p>(returns @NEWSLETTERS)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "addresses1",
            "optional": false,
            "description": "<p>(returns @BILLING @SHIPPING)   [[ this may duplicate data from %CUSTOMER ]]</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "wallets1",
            "optional": false,
            "description": "<p>(returns @WALLETS)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "wholesale1",
            "optional": false,
            "description": "<p>(returns %WS)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "giftcards1",
            "optional": false,
            "description": "<p>(returns @GIFTCARDS)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "tickets1",
            "optional": false,
            "description": "<p>(returns @TICKETS)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "notes1",
            "optional": false,
            "description": "<p>(returns @NOTES)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "events1",
            "optional": false,
            "description": "<p>(returns @EVENTS)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "orders1",
            "optional": false,
            "description": "<p>(returns @ORDERS)</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "%CUSTOMER",
            "optional": false,
            "description": "<p>Customer Object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCustomerOrganizationCreate",
    "title": "adminCustomerOrganizationCreate",
    "name": "adminCustomerOrganizationCreate",
    "group": "admin",
    "description": "<p>TODO| ID              | int(10) unsigned    | NO   | PRI | NULL    | auto_increment || MID             | int(10) unsigned    | NO   | MUL | 0       |                || USERNAME        | varchar(20)         | NO   |     |         |                || PRT             | tinyint(3) unsigned | NO   |     | 0       |                || CID             | int(10) unsigned    | NO   |     | 0       |                || EMAIL           | varchar(65)         | NO   |     |         |                || DOMAIN          | varchar(65)         | YES  |     | NULL    |                || firstname       | varchar(25)         | NO   |     |         |                || lastname        | varchar(25)         | NO   |     |         |                || company         | varchar(100)        | NO   |     |         |                || address1        | varchar(60)         | NO   |     |         |                || address2        | varchar(60)         | NO   |     |         |                || city            | varchar(30)         | NO   |     |         |                || region          | varchar(10)         | NO   |     |         |                || postal          | varchar(9)          | NO   |     |         |                || countrycode     | varchar(9)          | NO   |     |         |                || phone           | varchar(12)         | NO   |     |         |                || LOGO            | varchar(60)         | NO   |     |         |                || BILLING_CONTACT | varchar(60)         | NO   |     |         |                || BILLING_PHONE   | varchar(60)         | NO   |     |         |                || ALLOW_PO        | tinyint(3) unsigned | NO   |     | 0       |                || RESALE          | tinyint(3) unsigned | NO   |     | 0       |                || RESALE_PERMIT   | varchar(20)         | NO   |     |         |                || CREDIT_LIMIT    | decimal(10,2)       | NO   |     | NULL    |                || CREDIT_BALANCE  | decimal(10,2)       | NO   |     | NULL    |                || CREDIT_TERMS    | varchar(25)         | NO   |     |         |                || ACCOUNT_MANAGER | varchar(10)         | NO   |     |         |                || ACCOUNT_TYPE    | varchar(20)         | NO   |     |         |                || ACCOUNT_REFID   | varchar(36)         | NO   |     |         |                || JEDI_MID        | int(11)             | NO   |     | 0       |                |</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "field": "{String",
            "optional": false,
            "description": "<p>}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCustomerOrganizationDetail",
    "title": "adminCustomerOrganizationDetail",
    "name": "adminCustomerOrganizationDetail",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "ORGID",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "field": "{String",
            "optional": false,
            "description": "<p>}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCustomerOrganizationRemove",
    "title": "adminCustomerOrganizationRemove",
    "name": "adminCustomerOrganizationRemove",
    "group": "admin",
    "description": "<p>remove an organizationTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "ORGID",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "field": "{String",
            "optional": false,
            "description": "<p>}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCustomerOrganizationSearch",
    "title": "adminCustomerOrganizationSearch",
    "name": "adminCustomerOrganizationSearch",
    "group": "admin",
    "description": "<p>find an organizationTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CONTACT",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "PHONE",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "DOMAIN",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "EMAIL",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ORGID",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "IS_LOCKED",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ACCOUNT_MANAGER",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ACCOUNT_TYPE",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SCHEDULE",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "field": "{String",
            "optional": false,
            "description": "<p>}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCustomerOrganizationUpdate",
    "title": "adminCustomerOrganizationUpdate",
    "name": "adminCustomerOrganizationUpdate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "ORGID",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "field": "{String",
            "optional": false,
            "description": "<p>}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCustomerRemove",
    "title": "adminCustomerRemove",
    "name": "adminCustomerRemove",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CIDcustomer",
            "optional": false,
            "description": "<p>id #</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCustomerSearch",
    "title": "adminCustomerSearch",
    "name": "adminCustomerSearch",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "scopeGIFTCARD",
            "optional": false,
            "description": "<p>|SCHEDULE|ORDER|NAME|CID|EMAIL|PHONE|NOTES</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "searchforany",
            "optional": false,
            "description": "<p>text</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "email",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@CUSTOMERS",
            "optional": false,
            "description": "<p>Customer ID</p><deprecated version=\"201318\">"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "CID",
            "optional": false,
            "description": "<p></deprecated></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCustomerSelectorDetail",
    "title": "adminCustomerSelectorDetail",
    "name": "adminCustomerSelectorDetail",
    "group": "admin",
    "description": "<p>a product customer is a relative pointer to a grouping of customers.TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "selector",
            "optional": false,
            "description": "<p>CIDS=1,2,3,4EMAILS=user@domain.com,user2@domain.comSUBLIST=0    all subscribers (any list)SUBLIST=1-15    a specific subscriber listALL=*            all customers (regardless of subscriber status)</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@CIDSan",
            "optional": false,
            "description": "<p>array of product id&#39;s</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCustomerUpdate",
    "title": "adminCustomerUpdate",
    "name": "adminCustomerUpdate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CIDCustomer",
            "optional": false,
            "description": "<p>ID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "@updates",
            "optional": false,
            "description": "<p>&lt;![CDATA[</p><p><ul></p><ul><li>PASSWORDRESET?password=xyz    (or leave blank for random)</li><li>HINTRESET</li><li>SET?firstname=&amp;lastname=&amp;is_locked=&amp;newsletter_1=</li><li>ADDRCREATE?SHORTCUT=DEFAULT&amp;TYPE=BILL|SHIP&amp;firstname=&amp;lastname=&amp;phone=&amp;company=&amp;address1&amp;email=.. </li><li>ADDRUPDATE? [see ADDRCREATE]</li><li>ADDRREMOVE?TYPE=&amp;SHORTCUT=</li><li>SENDEMAIL?MSGID=&amp;MSGSUBJECT=optional&amp;MSGBODY=optional</li><li>ORGCREATE?firstname=&amp;middlename=&amp;lastname=&amp;company=&amp;address1=&amp;address2=&amp;city=&amp;region=&amp;postal=&amp;countrycode=&amp;phone=&amp;email=&amp;ALLOW_PO=&amp;SCHEDULE=&amp;RESALE=&amp;RESALE_PERMIT=&amp;CREDIT_LIMIT=&amp;CREDIT_BALANCE=&amp;CREDIT_TERMS=&amp;ACCOUNT_MANAGER=&amp;ACCOUNT_TYPE=&amp;ACCOUNT_REFID=&amp;JEDI_MID=&amp;DOMAIN=&amp;LOGO=&amp;IS_LOCKED=&amp;BILLING_PHONE=&amp;BILLING_CONTACT=&amp;</li><li>ORDERLINK?OID=</li><li>NOTECREATE?TXT=</li><li>NOTEREMOVE?NOTEID=</li><li>WALLETCREATE?CC=&amp;YY=&amp;MM=</li><li>WALLETDEFAULT?SECUREID=</li><li>WALLETREMOVE?SECUREID=</li><li>REWARDUPDATE?i=&amp;reason=&amp;</li><li>SETORIGIN?origin=integer</li><li>ADDTODO?title=&amp;note=</li><li>ADDTICKET?title=&amp;note=</li><li>DEPRECATED: WSSET?SCHEDULE=&amp;ALLOW_PO=&amp;RESALE=&amp;RESALE_PERMIT=&amp;CREDIT_LIMIT=&amp;CREDIT_BALANCE=&amp;ACCOUNT_MANAGER=&amp; </ul>]]&gt;</li></ul>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "*C",
            "optional": false,
            "description": "<p>Customer Object</p><example>&lt;![CDATA[example needed.]]&gt;</example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCustomerWalletPeek",
    "title": "adminCustomerWalletPeek",
    "name": "adminCustomerWalletPeek",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminDSAgentCreate",
    "title": "adminDSAgentCreate",
    "name": "adminDSAgentCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminDSAgentDetail",
    "title": "adminDSAgentDetail",
    "name": "adminDSAgentDetail",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminDSAgentList",
    "title": "adminDSAgentList",
    "name": "adminDSAgentList",
    "group": "admin",
    "description": "<p>returns a list of projects</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminDSAgentRemove",
    "title": "adminDSAgentRemove",
    "name": "adminDSAgentRemove",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminDSAgentUpdate",
    "title": "adminDSAgentUpdate",
    "name": "adminDSAgentUpdate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminDataQuery",
    "title": "adminDataQuery",
    "name": "adminDataQuery",
    "group": "admin",
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
    "url": "adminDebugProduct",
    "title": "adminDebugProduct",
    "name": "adminDebugProduct",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "PIDproduct",
            "optional": false,
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminDebugPromotion",
    "title": "adminDebugPromotion",
    "name": "adminDebugPromotion",
    "group": "admin",
    "description": "<p>does a promotion debugTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "SRCORDER",
            "optional": false,
            "description": "<p>|DEST|CART</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "_cartidSRC",
            "optional": false,
            "description": "<p>:CART</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ITEM1SRC",
            "optional": false,
            "description": "<p>=DEST: ITEM1,ITEM2,ITEM3</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "QTY1SRC",
            "optional": false,
            "description": "<p>=DEST: QTY1, QTY2, QTY3</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ZIPSRC",
            "optional": false,
            "description": "<p>=DEST:</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "STATESRC",
            "optional": false,
            "description": "<p>=DEST:</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "COUNTRYSRC",
            "optional": false,
            "description": "<p>=DEST:</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ORDERIDSRC",
            "optional": false,
            "description": "<p>=ORDER</p>"
          },
          {
            "group": "Request",
            "field": "{String",
            "optional": false,
            "description": "<p>}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminDebugSearch",
    "title": "adminDebugSearch",
    "name": "adminDebugSearch",
    "group": "admin",
    "description": "<p>runs a debug search query through the analyzerTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "VERBRAWE-QUERY",
            "optional": false,
            "description": "<p>|RAWE-SCHEMA-PID-LIVE|RAWE-SCHEMA-PID-CONFIGURED|RAWE-SHOWPID|RAWE-INDEXPID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "PIDproduct",
            "optional": false,
            "description": "<p>id (optional)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminDebugShipping",
    "title": "adminDebugShipping",
    "name": "adminDebugShipping",
    "group": "admin",
    "description": "<p>does a shipping debugTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "SRCORDER",
            "optional": false,
            "description": "<p>|DEST|CART</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "_cartidSRC",
            "optional": false,
            "description": "<p>:CART</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ITEM1SRC",
            "optional": false,
            "description": "<p>=DEST: ITEM1,ITEM2,ITEM3</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "QTY1SRC",
            "optional": false,
            "description": "<p>=DEST: QTY1, QTY2, QTY3</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ZIPSRC",
            "optional": false,
            "description": "<p>=DEST:</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "STATESRC",
            "optional": false,
            "description": "<p>=DEST:</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "COUNTRYSRC",
            "optional": false,
            "description": "<p>=DEST:</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ORDERIDSRC",
            "optional": false,
            "description": "<p>=ORDER</p>"
          },
          {
            "group": "Request",
            "field": "{String",
            "optional": false,
            "description": "<p>}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminDebugSite",
    "title": "adminDebugSite",
    "name": "adminDebugSite",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "check-global",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "check-domains",
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
    "url": "adminDebugTaxes",
    "title": "adminDebugTaxes",
    "name": "adminDebugTaxes",
    "group": "admin",
    "description": "<p>does a tax debugTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "SRCORDER",
            "optional": false,
            "description": "<p>|DEST|CART</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "_cartidSRC",
            "optional": false,
            "description": "<p>:CART</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ITEM1SRC",
            "optional": false,
            "description": "<p>=DEST: ITEM1,ITEM2,ITEM3</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "QTY1SRC",
            "optional": false,
            "description": "<p>=DEST: QTY1, QTY2, QTY3</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ZIPSRC",
            "optional": false,
            "description": "<p>=DEST:</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "STATESRC",
            "optional": false,
            "description": "<p>=DEST:</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "COUNTRYSRC",
            "optional": false,
            "description": "<p>=DEST:</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ORDERIDSRC",
            "optional": false,
            "description": "<p>=ORDER</p>"
          },
          {
            "group": "Request",
            "field": "{String",
            "optional": false,
            "description": "<p>}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "DOMAINNAME",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@HOSTS",
            "optional": false,
            "description": "<pre><code>{ &quot;HOSTNAME&quot;:&quot;www&quot;, &quot;HOSTTYPE&quot;:&quot;APP|REDIR|VSTORE|CUSTOM&quot; },HOSTTYPE=APP        will have &quot;PROJECT&quot;HOSTTYPE=REDIR    will have &quot;REDIR&quot;:&quot;www.domain.com&quot; &quot;URI&quot;:&quot;/path/to/301&quot;  (if URI is blank then it will redirect with previous path)HOSTTYPE=VSTORE    will have @REWRITES</code></pre>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "%EMAIL",
            "optional": false,
            "description": "<pre><code>EMAIL_TYPE=FUSEMAILEMAIL_TYPE=GOOGLEEMAIL_TYPE=NONEEMAIL_TYPE=MX        MX1,MX2 parameters</code></pre>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "DOMAINNAME",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@MSGS",
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
            "field": "DOMAINNAMEdomain.com",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "@updates",
            "optional": false,
            "description": "<p>&lt;![CDATA[DOMAIN-RESERVE        (note: leave DOMAINNAME blank/empty)DOMAIN-TRANSFERDOMAIN-REGISTERDOMAIN-DELEGATEDOMAIN-REMOVEDOMAIN-PRT-SET?PRT=###HOST-ADD?HOSTNAME=www|app|mHOST-SET?HOSTNAME=www|app|m&amp;HOSTTYPE=PROJECT|VSTORE|REDIR|CUSTOMHOST-KILL?HOSTNAME=wwwEMAIL-DKIM-INITEMAIL-SET?TYPE=FUSEMAIL|GOOGLE|NONE|MX&amp;MX1=&amp;MX2=VSTORE-MAKE-PRIMARYVSTORE-KILL-REWRITE?PATH=VSTORE-ADD-REWRITE?PATH=&amp;TARGETURL=]]&gt;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYAPI-AddFixedPriceItem",
    "title": "adminEBAYAPI-AddFixedPriceItem",
    "name": "adminEBAYAPI-AddFixedPriceItem",
    "group": "admin",
    "description": "<p>runs an eBay AddFixedPriceItem (see adminEBAYAPI-AddItem)TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYAPI-AddItem",
    "title": "adminEBAYAPI-AddItem",
    "name": "adminEBAYAPI-AddItem",
    "group": "admin",
    "description": "<p>runs an eBay API callsTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "Item/SKUproduct",
            "optional": false,
            "description": "<p>id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Item/Quantityquantity",
            "optional": false,
            "description": "<p>to launch (must be 1 for auctions)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Item/UUIDa",
            "optional": false,
            "description": "<p>unique # for this request</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "Profilezoovy",
            "optional": false,
            "description": "<p>launch profile to load settings from, if profile is not set, then ebay:profile will be used.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYAPI-VerifyAddFixedPriceItem",
    "title": "adminEBAYAPI-VerifyAddFixedPriceItem",
    "name": "adminEBAYAPI-VerifyAddFixedPriceItem",
    "group": "admin",
    "description": "<p>runs an eBay VerifyAddFixedPriceItem (see adminEBAYAPI-AddItem)TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYAPI-VerifyAddItem",
    "title": "adminEBAYAPI-VerifyAddItem",
    "name": "adminEBAYAPI-VerifyAddItem",
    "group": "admin",
    "description": "<p>runs an eBay VerifyAddItem (see adminEBAYAPI-AddItem)TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYMacro",
    "title": "adminEBAYMacro",
    "name": "adminEBAYMacro",
    "group": "admin",
    "description": "<p>Modify the eBay ConfigurationTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "PROFILE",
            "optional": false,
            "description": "<p>Profile specific calls require admin</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYProfileDetail",
    "title": "adminEBAYProfileDetail",
    "name": "adminEBAYProfileDetail",
    "group": "admin",
    "description": "<p>Returns the data in an eBay launch profileTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYProfileList",
    "title": "adminEBAYProfileList",
    "name": "adminEBAYProfileList",
    "group": "admin",
    "description": "<p>Returns the list of possible profilesTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYShippingDetail",
    "title": "adminEBAYShippingDetail",
    "name": "adminEBAYShippingDetail",
    "group": "admin",
    "description": "<p>Parses and returns a structured version of the shipping configuration for the profile requestedTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "PROFILE",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@OUR_DOMESTIC",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@OUR_INTERNATIONAL",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@ALL_LOCATIONS",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@OUR_LOCATIONS",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@PREFERENCES",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@SERVICES_DOMESTIC",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@SERVICES_INTERNATIONAL",
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
    "url": "adminEBAYTemplateDownload",
    "title": "adminEBAYTemplateDownload",
    "name": "adminEBAYTemplateDownload",
    "group": "admin",
    "description": "<p>lists the fields on an html wizardTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "ebay",
            "optional": false,
            "description": "<p>:template</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYTokenDetail",
    "title": "adminEBAYTokenDetail",
    "name": "adminEBAYTokenDetail",
    "group": "admin",
    "description": "<p>performs ebay &#39;GetUser&#39; call to verify current token, returns info associated with the partitionTODO</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@PROFILES",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "%TOKEN",
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
    "url": "adminEBAYTokenList",
    "title": "adminEBAYTokenList",
    "name": "adminEBAYTokenList",
    "group": "admin",
    "description": "<p>lists all tokens across all partitions (one token per partition)TODO</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@ACCOUNTS",
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
    "url": "adminEBAYWizardPreview",
    "title": "adminEBAYWizardPreview",
    "name": "adminEBAYWizardPreview",
    "group": "admin",
    "description": "<p>-- will need some love --TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminFAQCreate",
    "title": "adminFAQCreate",
    "name": "adminFAQCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminFAQDetail",
    "title": "adminFAQDetail",
    "name": "adminFAQDetail",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminFAQList",
    "title": "adminFAQList",
    "name": "adminFAQList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminFAQMacro",
    "title": "adminFAQMacro",
    "name": "adminFAQMacro",
    "group": "admin",
    "description": "<p>TODO</p><ul><li>ADDNOTE?note=xyz&amp;private=1|0</li><li>ASK?</li><li>UPDATE?escalate=1|0&amp;class=PRESALE|POSTSALE|EXCHANGE|RETURN</li><li>CLOSE</li></ul>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminFAQRemove",
    "title": "adminFAQRemove",
    "name": "adminFAQRemove",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminGiftcardCreate",
    "title": "adminGiftcardCreate",
    "name": "adminGiftcardCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "expiresYYYYMMDD",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "balancecurrency",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "quantitydefaults",
            "optional": false,
            "description": "<p>to 1 (if not specified)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "email",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1if a customer exists this will be matched to the cid, if a customer cannot be found a new customer account will be created, not compatible with qty &gt; 1</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "series",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1a mechanism for grouping cards, usually used with quantity greater than 1</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminGiftcardDetail",
    "title": "adminGiftcardDetail",
    "name": "adminGiftcardDetail",
    "group": "admin",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminGiftcardList",
    "title": "adminGiftcardList",
    "name": "adminGiftcardList",
    "group": "admin",
    "description": "<p>returns a list of projectsTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "@updates",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "description": "<p>SET/EMAIL?email=&amp;note=SET/BALANCE?email=&amp;note=SET/EXPIRES?expires=&amp;note=SET/CARDTYPE?cardtype=&amp;note=</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminGiftcardSearch",
    "title": "adminGiftcardSearch",
    "name": "adminGiftcardSearch",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminGiftcardSeriesList",
    "title": "adminGiftcardSeriesList",
    "name": "adminGiftcardSeriesList",
    "group": "admin",
    "description": "<p>returns a list of projectsTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminGiftcardSetupProduct",
    "title": "adminGiftcardSetupProduct",
    "name": "adminGiftcardSetupProduct",
    "group": "admin",
    "description": "<p>creates a product that when purchased automatically creates a giftcardTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminGiftcardSetupProduct",
    "title": "adminGiftcardSetupProduct",
    "name": "adminGiftcardSetupProduct",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminImageDelete",
    "title": "adminImageDelete",
    "name": "adminImageDelete",
    "group": "admin",
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
    "group": "admin",
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
    "group": "admin",
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
    "group": "admin",
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
    "group": "admin",
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
    "group": "admin",
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
    "group": "admin",
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
    "url": "adminKPIDBCollectionCreate",
    "title": "adminKPIDBCollectionCreate",
    "name": "adminKPIDBCollectionCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "titleTitle",
            "optional": false,
            "description": "<p>of the Collection</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "uuidUnique",
            "optional": false,
            "description": "<p>identifier (36 characters) for the collection</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "priorityThe",
            "optional": false,
            "description": "<p>position/priority/sequence of the collection</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "@GRAPHSan",
            "optional": false,
            "description": "<p>array of graphs which will be serialized and returned</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminKPIDBCollectionDetail",
    "title": "adminKPIDBCollectionDetail",
    "name": "adminKPIDBCollectionDetail",
    "group": "admin",
    "description": "<p>returns the contents of a collectionTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "uuidUnique",
            "optional": false,
            "description": "<p>identifier for this collection</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminKPIDBCollectionList",
    "title": "adminKPIDBCollectionList",
    "name": "adminKPIDBCollectionList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@COLLECTIONS",
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
    "url": "adminKPIDBCollectionRemove",
    "title": "adminKPIDBCollectionRemove",
    "name": "adminKPIDBCollectionRemove",
    "group": "admin",
    "description": "<p>removes a collectionTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "uuidUnique",
            "optional": false,
            "description": "<p>identifier (36 characters) for the collection</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminKPIDBCollectionUpdate",
    "title": "adminKPIDBCollectionUpdate",
    "name": "adminKPIDBCollectionUpdate",
    "group": "admin",
    "description": "<p>same as collection create (pass uuid of previous collection)TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminKPIDBDataQuery",
    "title": "adminKPIDBDataQuery",
    "name": "adminKPIDBDataQuery",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "ired",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>id=&quot;@datasets[&#39;dataset1&#39;,&#39;dataset2&#39;]</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "onal",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>id=&quot;perioda formula ex: months.1, weeks.1</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminKPIDBUserDataSetsList",
    "title": "adminKPIDBUserDataSetsList",
    "name": "adminKPIDBUserDataSetsList",
    "group": "admin",
    "description": "<p>returns a list of datasets accessible to the userTODO</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@DATASETS",
            "optional": false,
            "description": "<p>[ &#39;GROUP&#39;, &#39;DATASET-ID&#39;, &#39;Pretty name&#39; ],[ &#39;GROUP&#39;, &#39;DATASET-ID&#39;, &#39;Pretty name&#39; ],[ &#39;GROUP&#39;, &#39;DATASET-ID&#39;, &#39;Pretty name&#39; ],</p><hint>The DATASET-ID is what is passed into adminKPIDBDataQuery as the &quot;dataset&quot; parameter</hint>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminLUserTagGet",
    "title": "adminLUserTagGet",
    "name": "adminLUserTagGet",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "tag1",
            "optional": false,
            "description": "<p>&#39;&#39;</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "tag2",
            "optional": false,
            "description": "<p>&#39;&#39;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminLUserTagList",
    "title": "adminLUserTagList",
    "name": "adminLUserTagList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "tag",
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
    "url": "adminLUserTagSet",
    "title": "adminLUserTagSet",
    "name": "adminLUserTagSet",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "tagdata",
            "optional": false,
            "description": "<hint>Limited to 128 bytes per tag, 10,000 tags max (then old tags are auto-expired)</hint>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminMessagesList",
    "title": "adminMessagesList",
    "name": "adminMessagesList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "msgid",
            "optional": false,
            "description": "<example>&lt;![CDATA[ConfigVersionResponseResponseMsg]]&gt;</example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminMessagesRemove",
    "title": "adminMessagesRemove",
    "name": "adminMessagesRemove",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "msgid",
            "optional": false,
            "description": "<example>&lt;![CDATA[ConfigVersionResponseResponseMsg]]&gt;</example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminMySystemHealth",
    "title": "adminMySystemHealth",
    "name": "adminMySystemHealth",
    "group": "admin",
    "description": "<p>Runs a series of diagnostics and returns 3 arrays @SYSTEM, @MYAPPS, @MARKETthe call itself may be <em>VERY</em> slow - taking up to 30 seconds.</p><p>each array will contain one or more responses ex:{     &#39;type&#39;:&#39;critical|issue|alert|bad|fyi|good&#39;,    &#39;system&#39;:&#39;a short (3-12 char) global unique identifier for the system ex: Inventory&#39;,    &#39;title&#39;:&#39;a pretty title for the message&#39;,    &#39;detail&#39;:&#39;not always included, but provides more detail about a specific issue what that could mean, ex:an unusually large number of unprocessed events does not mean there is a problem per-se,it means many automation systems such as inventory, supply chain, marketplace tracking notifications and more could be delayed.&#39;,    &#39;debug&#39;:&#39;xozo some internal crap that means something to a developer&#39;,}</p><p>TODO</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@SYSTEM",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@MYAPPS",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@MARKET",
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
    "url": "adminNavTreeList",
    "title": "adminNavTreeList",
    "name": "adminNavTreeList",
    "description": "<p>a list of nav elements</p>",
    "group": "admin",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Array",
            "field": "@NAVS",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "{",
          "content": "{\n'@NAVS':[\n]\n}\n",
          "type": "\t\"type\":\"navcat\", \"prt\":\"1\", \"nav\":\"PRT001\", \"title\":\"Partition 1\"  "
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminNavcatCreate",
    "title": "adminNavcatCreate",
    "name": "adminNavcatCreate",
    "group": "admin",
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
            "description": "<p>(set to $ for list)</p>"
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
    "group": "admin",
    "description": "<p>permanently removes a navigation category or list.</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "path.safe.name",
            "optional": false,
            "description": "<p>or path:$listname</p>"
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
    "group": "admin",
    "description": "<p>changes the pretty name of a navigation category or list</purpose></p><p>note: will support %meta tags in the future.</p>",
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
            "description": "<p>name for category</p>"
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
    "group": "admin",
    "description": "<p>removes a single product from a navigation category or list.</p>",
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
    "group": "admin",
    "description": "<p>adds a single product to a navigation category or list.</p>",
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
            "field": "pid",
            "optional": false,
            "description": "<p>pid1</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "position",
            "optional": false,
            "description": "<h1 id=\"-0-first-element-in-the-list-1-last-element-in-the-list-\">(0=first element in the list, -1=last element in the list)</h1>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminNewsletterList",
    "title": "adminNewsletterList",
    "name": "adminNewsletterList",
    "group": "admin",
    "description": "<p>see appNewsletterList, unlike public call also show hidden and not provisioned newslettersTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminOrderDetail",
    "title": "adminOrderDetail",
    "name": "adminOrderDetail",
    "group": "admin",
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
    "group": "admin",
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
    "url": "adminOrderPaymentAction",
    "title": "adminOrderPaymentAction",
    "name": "adminOrderPaymentAction",
    "group": "admin",
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
    "url": "adminPageGet",
    "title": "adminPageGet",
    "name": "adminPageGet",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "PATH",
            "optional": false,
            "description": "<p>.path.to.page or @CAMPAIGNID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "@get",
            "optional": false,
            "description": "<p>[ &#39;attrib1&#39;, &#39;attrib2&#39;, &#39;attrib3&#39; ]</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "all",
            "optional": false,
            "description": "<p>set to 1 to return all fields (handy for json libraries which don&#39;t return @get=[]) </p><p><example>attrib1:xyzattrib2:xyz</example></p><note>leave @get blank for all page attributes</note>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPageList",
    "title": "adminPageList",
    "name": "adminPageList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "@PAGES",
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
    "url": "adminPageSet",
    "title": "adminPageSet",
    "name": "adminPageSet",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "PATH.path.to.page",
            "optional": false,
            "description": "<p>or @CAMPAIGNID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "%set",
            "optional": false,
            "description": "<p>{ &#39;attrib1&#39;=&gt;&#39;newvalue&#39;, &#39;attrib2&#39;=&gt;&#39;new value&#39;, &#39;attrib3&#39;=&gt;undefined }</p><hint>set value to &quot;undefined&quot; to delete it.</hint>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPartitionList",
    "title": "adminPartitionList",
    "name": "adminPartitionList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@PRTS",
            "optional": false,
            "description": "<p>An array of partitions</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPartnerGet",
    "title": "adminPartnerGet",
    "name": "adminPartnerGet",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "partnerEBAY",
            "optional": false,
            "description": "<note>&lt;![CDATA[]]&gt;</note>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPartnerSet",
    "title": "adminPartnerSet",
    "name": "adminPartnerSet",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "partnerEBAY",
            "optional": false,
            "description": "<note>&lt;![CDATA[Generic call to save data retrieved from partner return URL&#39;s, parameters vary.]]&gt;</note>"
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
    "url": "adminPlatformHealth",
    "title": "adminPlatformHealth",
    "name": "adminPlatformHealth",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPlatformMacro",
    "title": "adminPlatformMacro",
    "name": "adminPlatformMacro",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPlatformQueueList",
    "title": "adminPlatformQueueList",
    "name": "adminPlatformQueueList",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPriceScheduleCreate",
    "title": "adminPriceScheduleCreate",
    "name": "adminPriceScheduleCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPriceScheduleDetail",
    "title": "adminPriceScheduleDetail",
    "name": "adminPriceScheduleDetail",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "SIDschedule",
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
    "url": "adminPriceScheduleList",
    "title": "adminPriceScheduleList",
    "name": "adminPriceScheduleList",
    "group": "admin",
    "description": "<p>Returns a list of available schedule id&#39;s.<br>Each schedule has a unique 6 digit alphanumeric code that is used as an identifier.TODO</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@SCHEDULES",
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
    "url": "adminPriceScheduleRemove",
    "title": "adminPriceScheduleRemove",
    "name": "adminPriceScheduleRemove",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "SIDschedule",
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
    "url": "adminPriceScheduleUpdate",
    "title": "adminPriceScheduleUpdate",
    "name": "adminPriceScheduleUpdate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPrivateFileDownload",
    "title": "adminPrivateFileDownload",
    "name": "adminPrivateFileDownload",
    "group": "admin",
    "description": "<p>TODO</p>",
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
    "url": "adminPrivateFileList",
    "title": "adminPrivateFileList",
    "name": "adminPrivateFileList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "type",
            "optional": true,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "guid",
            "optional": true,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "active",
            "optional": true,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "keyword",
            "optional": true,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "limit",
            "optional": true,
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
    "url": "adminPrivateSearch",
    "title": "adminPrivateSearch",
    "name": "adminPrivateSearch",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "typeorder",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "type",
            "optional": false,
            "description": "<p>[&#39;order&#39;]</p><note>if not specified then: type:_all is assumed.</note><note>www.elasticsearch.org/guide/reference/query-dsl/</note>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "modeelastic-native",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "=",
            "optional": false,
            "description": "<p>&quot;mode:elastic-native&quot; id=&quot;filter { &#39;term&#39;:{ &#39;profile&#39;:&#39;DEFAULT&#39; } };</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "size",
            "optional": false,
            "description": "<p>100 # number of results</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "sort",
            "optional": false,
            "description": "<p>[&#39;_score&#39;,&#39;base_price&#39;,&#39;prod_name&#39;]</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "from",
            "optional": false,
            "description": "<p>100    # start from result # 100</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "scroll",
            "optional": false,
            "description": "<p>30s,1m,5m</p><note>&lt;![CDATA[Filter is an exact match, whereas query is a token/substring match - filter is MUCH faster and should be usedwhen the exact value is known (ex: tags, profiles, upc, etc.)<ul> KNOWN KEYS:</ul>]]&gt;</note>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@products",
            "optional": false,
            "description": "<p>an array of product ids</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@LOG",
            "optional": false,
            "description": "<p>an array of strings explaining how the search was performed (if LOG=1 or TRACEPID non-blank)</p><caution>Using LOG=1 or TRACEPID in a product (non debug) environment will result in the search feature beingdisabled on a site.</caution>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "%thesaurus",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "Array",
            "field": "@DETAIL",
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
            "field": "@MSGS",
            "optional": false,
            "description": "<note>TITLE|SUCCESS|INFO|WARN|STOP|PAUSE|ERROR|DEPRECATION|DEBUG|XML</note>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "pidpid1",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Array",
            "field": "@DBMAPS",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "buycom/dbmap",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "%FLEX",
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
    "url": "adminProductCreate",
    "title": "adminProductCreate",
    "name": "adminProductCreate",
    "group": "admin",
    "description": "<p>creates a new product in the database</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "pidpid",
            "optional": false,
            "description": "<p>: an A-Z|0-9|-|_ -- max length 20 characters, case insensitive</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "%attribs",
            "optional": false,
            "description": "<p>[ &#39;zoovy:prod_name&#39;:&#39;value&#39; ]</p><example>%attribs:[ &#39;zoovy:prod_name&#39;:&#39;value&#39; ]</example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProductDebugLog",
    "title": "adminProductDebugLog",
    "name": "adminProductDebugLog",
    "group": "admin",
    "description": "<p>see reports for @HEAD,@BODY format</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
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
            "field": "GUID",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Array",
            "field": "@HEAD",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "Array",
            "field": "@BODY",
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
    "url": "adminProductDelete",
    "title": "adminProductDelete",
    "name": "adminProductDelete",
    "group": "admin",
    "description": "<p>removes a product id (and all variations) from the database</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "pidpid",
            "optional": false,
            "description": "<p>: an A-Z|0-9|-|_ -- max length 20 characters, case insensitive</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProductEBAYDetail",
    "title": "adminProductEBAYDetail",
    "name": "adminProductEBAYDetail",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "pidpid1",
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
    "url": "adminProductList",
    "title": "adminProductList",
    "name": "adminProductList",
    "group": "admin",
    "description": "<p>accesses the product database to return a specific hardcoded list of products</p><hint>indexed attributes: zoovy:prod_id,zoovy:prod_name,zoovy:prod_supplierid,  zoovy:prod_salesrank, zoovy:prod_mfgid,zoovy:prod_upc, zoovy:profile</hint>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CREATED_BEFORE",
            "optional": true,
            "description": "<p>modified since timestamp</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "CREATED_SINCE",
            "optional": true,
            "description": "<p>modified since timestamp</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SUPPLIER",
            "optional": true,
            "description": "<p>supplier id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProductMacro",
    "title": "adminProductMacro",
    "name": "adminProductMacro",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "pidpid1",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "Array",
            "field": "@updates",
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
    "url": "adminProductManagementCategoriesList",
    "title": "adminProductManagementCategoriesList",
    "name": "adminProductManagementCategoriesList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@CATEGORIES",
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
            "field": "pidpid1",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "@pogsan",
            "optional": false,
            "description": "<p>array of pog options</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProductReviewApprove",
    "title": "adminProductReviewApprove",
    "name": "adminProductReviewApprove",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "RIDreview",
            "optional": false,
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProductReviewCreate",
    "title": "adminProductReviewCreate",
    "name": "adminProductReviewCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "RIDreview",
            "optional": false,
            "description": "<p>id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "PIDreview",
            "optional": false,
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProductReviewList",
    "title": "adminProductReviewList",
    "name": "adminProductReviewList",
    "group": "admin",
    "description": "<p>returns a list of all reviews with a filter</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "filterALL",
            "optional": false,
            "description": "<p>|UNAPPROVED|RECENT</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "PID",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1product id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "RIDreview",
            "optional": false,
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "RIDreview",
            "optional": false,
            "description": "<p>id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "CUSTOMER_NAME",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "LOCATION",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "RATING",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SUBJECT",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "MESSAGE",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "BLOG_URL",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProductSelectorDetail",
    "title": "adminProductSelectorDetail",
    "name": "adminProductSelectorDetail",
    "group": "admin",
    "description": "<p>a product selector is a relative pointer to a grouping of products.</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "selector",
            "optional": false,
            "description": "<p>NAVCAT=.safe.pathNAVCAT=$listCSV=pid1,pid2,pid3CREATED=YYYYMMDD|YYYYMMDDRANGE=pid1|pid2MANAGECAT=/path/to/categorySEARCH=saerchtermPROFILE=xyzSUPPLIER=xyzMFG=xyxALL=your_base_are_belong_to_us</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "Array",
            "field": "@products",
            "optional": false,
            "description": "<p>an array of product id&#39;s</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProductUpdate",
    "title": "adminProductUpdate",
    "name": "adminProductUpdate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "pidpid",
            "optional": false,
            "description": "<p>: an A-Z|0-9|-|_ -- max length 20 characters, case insensitive</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "%attribs",
            "optional": false,
            "description": "<p>[ &#39;attribute&#39;:&#39;value&#39;, &#39;anotherattrib&#39;:&#39;value&#39; ]</p><example>%attribs:[ &#39;attribute&#39;:&#39;value&#39;, &#39;anotherattrib&#39;:&#39;value&#39; ]</example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProjectClone",
    "title": "adminProjectClone",
    "name": "adminProjectClone",
    "group": "admin",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProjectCreate",
    "title": "adminProjectCreate",
    "name": "adminProjectCreate",
    "group": "admin",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProjectDetail",
    "title": "adminProjectDetail",
    "name": "adminProjectDetail",
    "group": "admin",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProjectGitMacro",
    "title": "adminProjectGitMacro",
    "name": "adminProjectGitMacro",
    "group": "admin",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProjectList",
    "title": "adminProjectList",
    "name": "adminProjectList",
    "group": "admin",
    "description": "<p>returns a list of projectsTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProjectRemove",
    "title": "adminProjectRemove",
    "name": "adminProjectRemove",
    "group": "admin",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProjectUpdate",
    "title": "adminProjectUpdate",
    "name": "adminProjectUpdate",
    "group": "admin",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPublicFileDelete",
    "title": "adminPublicFileDelete",
    "name": "adminPublicFileDelete",
    "group": "admin",
    "description": "<p>Public files are hosted at a URL and can be downloaded, they are usually things like short videos, etc.TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "fileguidguid",
            "optional": false,
            "description": "<p>from fileupload</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "filename",
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
    "url": "adminPublicFileList",
    "title": "adminPublicFileList",
    "name": "adminPublicFileList",
    "group": "admin",
    "description": "<p>Public files are hosted at a URL and can be downloaded, they are usually things like short videos, etc.TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "fileguidguid",
            "optional": false,
            "description": "<p>from fileupload</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "filename",
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
    "url": "adminPublicFileUpload",
    "title": "adminPublicFileUpload",
    "name": "adminPublicFileUpload",
    "group": "admin",
    "description": "<p>Public files are hosted at a URL and can be downloaded, they are usually things like short videos, etc.TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "fileguidguid",
            "optional": false,
            "description": "<p>from fileupload</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "filename",
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
    "url": "adminRSSClone",
    "title": "adminRSSClone",
    "name": "adminRSSClone",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CPG",
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
    "url": "adminRSSCreate",
    "title": "adminRSSCreate",
    "name": "adminRSSCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "feed_title",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "feed_link",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "feed_link_override",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "feed_subject",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "max_products",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "cycle_interval",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "schedule",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "profile",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "list",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "image_h",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "image_w",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "translation",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "coupon",
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
    "url": "adminRSSDetail",
    "title": "adminRSSDetail",
    "name": "adminRSSDetail",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminRSSList",
    "title": "adminRSSList",
    "name": "adminRSSList",
    "group": "admin",
    "description": "<p>returns a list of projectsTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminRSSRemove",
    "title": "adminRSSRemove",
    "name": "adminRSSRemove",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CPG",
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
    "url": "adminRSSUpdate",
    "title": "adminRSSUpdate",
    "name": "adminRSSUpdate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CPG",
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
    "url": "adminSOGComplete",
    "title": "adminSOGComplete",
    "name": "adminSOGComplete",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminSOGCreate",
    "title": "adminSOGCreate",
    "name": "adminSOGCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "%sogjson",
            "optional": false,
            "description": "<p>nested sog structure</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminSOGDetail",
    "title": "adminSOGDetail",
    "name": "adminSOGDetail",
    "group": "admin",
    "description": "<p>Returns a list of Store Option Groups (SOGs), see the SOG xml format for more specific information.TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "idsog-id",
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
    "url": "adminSOGList",
    "title": "adminSOGList",
    "name": "adminSOGList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminSOGUpdate",
    "title": "adminSOGUpdate",
    "name": "adminSOGUpdate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "%sogjson",
            "optional": false,
            "description": "<p>nested sog structure</p>"
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
            "field": "DSTmarketplace",
            "optional": false,
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@ROWS",
            "optional": false,
            "description": "<pre><code>[ pid, sku, feed, ts, msgtype, msg ]</code></pre>"
          }
        ]
      }
    },
    "description": "<p>returns up to 1000 products where the amazon error flag is set in the SKU Lookup table.TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "DSTAMZ",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "description": "<p>displays orders created in the last 50 days which have not been flagged as fulfilled/processed. TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "DSTAMZ",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@CATEGORIES",
            "optional": false,
            "description": "<pre><code>[ safename, prettyname, thesauruskey, thesaurusvalue ]</code></pre>"
          }
        ]
      }
    },
    "description": "<p>store categories may have one or more amazon thesauruses associated with it a thesaurus helps amazon classify a product similar to a category+tag might in other systems.    for example &#39;color&#39; &#39;navy&#39; in the amazon system might be equivalent to &#39;color&#39; &#39;blue&#39; when somebody does a search, but not &#39;color&#39; &#39;teal&#39; (which might also map to both blue/green).    a single category may have many thesaurus keys/values.TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "DSTBUY",
            "optional": false,
            "description": "<p>|BST</p>"
          }
        ]
      }
    },
    "description": "<p>buy.com/bestbuy.com have support for json dbmaps, which allow uses to create ad-hoc schema that maps existing product attributes to buy.com data.    since buy.com product feeds are no longer sent in an automated fasion the utility of this feature is somewhat limited, but can still be used to perform additional validation    during/prior to export.    each dbmap has a 1-8 digit code, and associated json (which uses a modified flexedit syntax).    each product would then have a corresponding buycom:dbmap or bestbuy:dbmap field set.TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "DSTmarketplace",
            "optional": false,
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "FEEDTYPEPRODUCT",
            "optional": false,
            "description": "<p>|INVENTORY</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "PID",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1PRODUCTID</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "HTMLHtml",
            "optional": false,
            "description": "<p>messaging describing the syndication process + any errors</p>"
          }
        ]
      }
    },
    "description": "<p>runs the syndication process in realtime and returns an html response describing &#39;what happened&#39;TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminSyndicationDetail",
    "title": "adminSyndicationDetail",
    "name": "adminSyndicationDetail",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "DSTmarketplace",
            "optional": false,
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "DSTmarketplace",
            "optional": false,
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@ROWS",
            "optional": false,
            "description": "<pre><code>[ timestamp1, sku1, feedtype1, errcode1, errmsg1, batchjob#1 ],[ timestamp2, sku2, feedtype2, errcode2, errmsg2, batchjob#2 ],</code></pre>"
          }
        ]
      }
    },
    "description": "<p>displays up to 500 to remove/hide these.TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "DSTmarketplace",
            "optional": false,
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@ROWS",
            "optional": false,
            "description": "<pre><code>[ msgtype1, timestamp1, message1 ],[ msgtype2, timestamp2, message2 ],</code></pre>"
          }
        ]
      }
    },
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminSyndicationList",
    "title": "adminSyndicationList",
    "name": "adminSyndicationList",
    "group": "admin",
    "description": "<p>returns a list of marketplaces and their configuration statusTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "DSTmarketplace",
            "optional": false,
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@FILES",
            "optional": false,
            "description": "<pre><code>{ FILENAME, FILETYPE, GUID }</code></pre>"
          }
        ]
      }
    },
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "DSTmarketplace",
            "optional": false,
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "@updates",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "description": "<p>DELETE    ENABLE    DISABLE    UNSUSPEND    CLEAR-FEED-ERRORS    SAVE?fields=from&amp;input=form    DBMAP-NUKE?MAPID=    DBMAP-SAVE?MAPID=&amp;CATID=&amp;STOREID=&amp;MAPTXT=    AMZ-THESAURUS-DELETE?guid=    AMZ-THESAURUS-SAVE?name=&amp;guid=&amp;search_terms&amp;itemtype=&amp;subjectcontent&amp;targetaudience&amp;isgiftwrapavailable&amp;    AMZ-SHIPPING-SAVE?Standard=XXX&amp;Expedited=XXY&amp;Scheduled=XXZ&amp;NextDay=XYY&amp;SecondDay=XYZ    AMZ-TOKEN-UPDATE?marketplaceId=&amp;merchantId=</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "DSTmarketplace",
            "optional": false,
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "FEEDTYPEPRODUCT",
            "optional": false,
            "description": "<p>|INVENTORY</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "JOBID",
            "optional": false,
            "description": ""
          }
        ]
      }
    },
    "description": "<p>creates a batch job for publishingTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTOXMLSetFavorite",
    "title": "adminTOXMLSetFavorite",
    "name": "adminTOXMLSetFavorite",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "formatWRAPPER",
            "optional": false,
            "description": "<p>|LAYOUT|EMAIL</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "docid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "favoritetrue",
            "optional": false,
            "description": "<p>|false</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTaskComplete",
    "title": "adminTaskComplete",
    "name": "adminTaskComplete",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTaskCreate",
    "title": "adminTaskCreate",
    "name": "adminTaskCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "INFO",
            "optional": false,
            "description": "<p>|WARN|ERROR|SETUP|TODO        ## SETUP = setup tasks, TODO=user created.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "titl",
            "optional": false,
            "description": "<p>100 character short message</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "detail",
            "optional": false,
            "description": "<p>long description</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "errcode",
            "optional": false,
            "description": "<p>AMZ#1234,EBAY#1234,        ## see %TODO::CODES below</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "dstcode",
            "optional": false,
            "description": "<p>GOO check SYNDICATION.pm for dstcodes</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "link",
            "optional": false,
            "description": "<p>order:####-##-###|product:ABC|ticket:1234&quot; or: ticket=&gt;$ticketid, order=&gt;$oid, pid=&gt;$pid,        ## this is preferred because it will set other fields.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "guid",
            "optional": false,
            "description": "<p>$related_private_file_guid|$bj-&gt;guid(),</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "priority",
            "optional": false,
            "description": "<p>1|2|3        ## you don&#39;t need to set this unless you want to override 1=high,2=warn,3=error</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "group",
            "optional": false,
            "description": "<p>another way of referencing errcode.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "panel",
            "optional": false,
            "description": "<p>the name of the panel which contains a tutorial video (for SETUP tasks)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTaskDetail",
    "title": "adminTaskDetail",
    "name": "adminTaskDetail",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTaskRemove",
    "title": "adminTaskRemove",
    "name": "adminTaskRemove",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "taskid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "pid",
            "optional": false,
            "description": "<p>+dstcode</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "class",
            "optional": false,
            "description": "<p>+panel</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTaskUpdate",
    "title": "adminTaskUpdate",
    "name": "adminTaskUpdate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTechnicalRequest",
    "title": "adminTechnicalRequest",
    "name": "adminTechnicalRequest",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "METHODCREATE",
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
    "url": "adminTemplateCreateFrom",
    "title": "adminTemplateCreateFrom",
    "name": "adminTemplateCreateFrom",
    "group": "admin",
    "description": "<p>copies from a container into a templateTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CONTAINERIDebay",
            "optional": false,
            "description": "<p>profile or campaign id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "TYPEEBAY",
            "optional": false,
            "description": "<p>|CPG|CIA|APP</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "PROJECTIDoptional",
            "optional": false,
            "description": "<p>(defaults to TEMPLATES)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SUBDIR",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "files",
            "optional": false,
            "description": "<h1 id=\"of-files-copied\">of files copied</h1>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "dirs",
            "optional": false,
            "description": "<h1 id=\"of-sub-directories-copied\">of sub-directories copied</h1>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTemplateDetail",
    "title": "adminTemplateDetail",
    "name": "adminTemplateDetail",
    "group": "admin",
    "description": "<p>displays the details of a TEMPLATETODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "TYPEEBAY",
            "optional": false,
            "description": "<p>|CPG|CIA|APP</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "PROJECTID",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SUBDIR",
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
    "url": "adminTemplateInstall",
    "title": "adminTemplateInstall",
    "name": "adminTemplateInstall",
    "group": "admin",
    "description": "<p>installs a template into a containerTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CONTAINERIDebay",
            "optional": false,
            "description": "<p>profile or campaign id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "TYPEEBAY",
            "optional": false,
            "description": "<p>|CPG|CIA|APP</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "PROJECTIDoptional",
            "optional": false,
            "description": "<p>(defaults to TEMPLATES)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SUBDIR",
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
    "url": "adminTemplateList",
    "title": "adminTemplateList",
    "name": "adminTemplateList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CONTAINERIDebay",
            "optional": false,
            "description": "<p>profile or campaign id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "TYPEEBAY",
            "optional": false,
            "description": "<p>|CPG|CIA|APP</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@TEMPLATES",
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
    "url": "adminTicketCreate",
    "title": "adminTicketCreate",
    "name": "adminTicketCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "disposition",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "body",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "subject",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "callback",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "private",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "priority",
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
    "url": "adminTicketDetail",
    "title": "adminTicketDetail",
    "name": "adminTicketDetail",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTicketFileAttach",
    "title": "adminTicketFileAttach",
    "name": "adminTicketFileAttach",
    "group": "admin",
    "description": "<p>ticketid, uuid</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTicketFileGet",
    "title": "adminTicketFileGet",
    "name": "adminTicketFileGet",
    "group": "admin",
    "description": "<p>download a file attached to a ticket.</purpose></p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "ticketidticket",
            "optional": false,
            "description": "<p>#</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "onal",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>id=&quot;remoteremote stored filename obtained from @FILES[] in adminTicketFileList</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTicketFileList",
    "title": "adminTicketFileList",
    "name": "adminTicketFileList",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTicketFileRemove",
    "title": "adminTicketFileRemove",
    "name": "adminTicketFileRemove",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTicketList",
    "title": "adminTicketList",
    "name": "adminTicketList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "detail",
            "optional": false,
            "description": "<p>&quot; required=&quot;1open|all|projects|waiting</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@FILES",
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
    "url": "adminTicketMacro",
    "title": "adminTicketMacro",
    "name": "adminTicketMacro",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminUIBuilderPanelExecute",
    "title": "adminUIBuilderPanelExecute",
    "name": "adminUIBuilderPanelExecute",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "subEDIT",
            "optional": false,
            "description": "<p>|SAVE|SAVE-EDIT</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "idelement",
            "optional": false,
            "description": "<p>id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "panelPanel",
            "optional": false,
            "description": "<p>Identifier (the &#39;id&#39; field returned by adminUIProductList</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "html",
            "optional": false,
            "description": "<p>the html content of the product editor panel</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "js",
            "optional": false,
            "description": "<p>the js which is required by the panel.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminUIExecuteCGI",
    "title": "adminUIExecuteCGI",
    "name": "adminUIExecuteCGI",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "uri/biz/setup/shipping/index.cgi",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "%vars",
            "optional": false,
            "description": "<p>{ x:1, y:2, z:3 }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminUIMediaLibraryExecute",
    "title": "adminUIMediaLibraryExecute",
    "name": "adminUIMediaLibraryExecute",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "verbLOAD",
            "optional": false,
            "description": "<p>|SAVE</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "src",
            "optional": false,
            "description": "<p>(required for LOAD|SAVE)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "IMG",
            "optional": false,
            "description": "<p>(required for SAVE)</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "IMG",
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
    "url": "adminVendorCreate",
    "title": "adminVendorCreate",
    "name": "adminVendorCreate",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminVendorDetail",
    "title": "adminVendorDetail",
    "name": "adminVendorDetail",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminVendorMacro",
    "title": "adminVendorMacro",
    "name": "adminVendorMacro",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminVendorRemove",
    "title": "adminVendorRemove",
    "name": "adminVendorRemove",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminVendorSearch",
    "title": "adminVendorSearch",
    "name": "adminVendorSearch",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminVendorUpdate",
    "title": "adminVendorUpdate",
    "name": "adminVendorUpdate",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminVersionCheck",
    "title": "adminVersionCheck",
    "name": "adminVersionCheck",
    "group": "admin",
    "description": "<p>Checks the clients version and compatibility level against the API&#39;s current compatibility level.TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "client",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "version",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "stationid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "subuser",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "localip",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "osver",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "finger",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "DATA",
            "optional": false,
            "description": "<p>[RESPONSE can be either</p><ul><li>OKAY - proceed with normal</li><li>FAIL - a reason for the failure</li><li>WARN - a warning, but it is okay to proceed]]&gt;<example>&lt;![CDATA[ConfigVersionResponseResponseMsg]]&gt;</example></li></ul>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminWarehouseDetail",
    "title": "adminWarehouseDetail",
    "name": "adminWarehouseDetail",
    "group": "admin",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
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
            "field": "GEOgeocode",
            "optional": false,
            "description": "<p>of warehouse</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SKU",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1SKU to filter by</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SKUS",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1SKU1,SKU2,SKU3 to filter by</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "LOC",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1LOC to filter by</p>"
          }
        ],
        "Response": [
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
            "field": "@WAREHOUSES",
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
    "url": "adminWarehouseMacro",
    "title": "adminWarehouseMacro",
    "name": "adminWarehouseMacro",
    "group": "admin",
    "description": "<p>to create/update/delete/modify (via macro) the wms systemTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "WAREHOUSE",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "@updatesan",
            "optional": false,
            "description": "<p>array of cmd objects</p><example>&lt;![CDATA[* ]]&gt;</example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appSupplierAuthorize",
    "title": "appSupplierAuthorize",
    "name": "appSupplierAuthorize",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": "<p>(must start with a &#39;:&#39;) as returned by appSupplierInit</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "hashtype",
            "optional": false,
            "description": "<p>md5|sha1</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "hashpass",
            "optional": false,
            "description": "<p>hashtype(password+_cartid)</p><hint>hashpass is generated by computing the md5 or sha1 hexadecimal value of the concatenation of both the plain text password, and the _cartid. Here are some examples (all examples assume password is &#39;secret&#39; and the cartid is &#39;:1234&#39; MySQL: md5(concat(&#39;secret&#39;,&#39;:1234&#39;)) = 1ed15901cfc0cb8c61b43a440d853d45MySQL: sha1(concat(&#39;secret&#39;,&#39;:1234&#39;)) = d9bc94d9c90e5de7a1c43a34f262d348244e9505</hint>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appSupplierInit",
    "title": "appSupplierInit",
    "name": "appSupplierInit",
    "group": "admin",
    "description": "<p>Allow an external supplier to authorize to commerceRack (NOT FULLY IMPLEMENTED)</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "supplierxyz",
            "optional": false,
            "description": "<p>\\@domain.com</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "password1234",
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
    "url": "billingInvoiceDetail",
    "title": "billingInvoiceDetail",
    "name": "billingInvoiceDetail",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "billingInvoiceList",
    "title": "billingInvoiceList",
    "name": "billingInvoiceList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "billingPaymentList",
    "title": "billingPaymentList",
    "name": "billingPaymentList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "billingPaymentMacro",
    "title": "billingPaymentMacro",
    "name": "billingPaymentMacro",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "billingTransactions",
    "title": "billingTransactions",
    "name": "billingTransactions",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "bossRoleCreate",
    "title": "bossRoleCreate",
    "name": "bossRoleCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "tag",
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
    "url": "bossRoleDelete",
    "title": "bossRoleDelete",
    "name": "bossRoleDelete",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "tag",
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
    "url": "bossRoleList",
    "title": "bossRoleList",
    "name": "bossRoleList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "tag",
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
    "url": "bossRoleUpdate",
    "title": "bossRoleUpdate",
    "name": "bossRoleUpdate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "tag",
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
    "url": "bossUserCreate",
    "title": "bossUserCreate",
    "name": "bossUserCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "tag",
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
    "url": "bossUserDelete",
    "title": "bossUserDelete",
    "name": "bossUserDelete",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "tag",
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
    "url": "bossUserDetail",
    "title": "bossUserDetail",
    "name": "bossUserDetail",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "tag",
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
    "url": "bossUserList",
    "title": "bossUserList",
    "name": "bossUserList",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "tag",
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
    "url": "bossUserUpdate",
    "title": "bossUserUpdate",
    "name": "bossUserUpdate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "tag",
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
    "url": "canIUse",
    "title": "canIUse",
    "name": "canIUse",
    "group": "admin",
    "description": "<p>Utility function which checks access to a specific bundle ex: CRM, XSELLTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "flag",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "allowed",
            "optional": false,
            "description": "<p>1|0</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "cartAmazonPaymentURL",
    "title": "cartAmazonPaymentURL",
    "name": "cartAmazonPaymentURL",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "shipping",
            "optional": false,
            "description": "<p>1|0     (prompt for shipping address)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "CancelUrl",
            "optional": false,
            "description": "<p>URL to redirect user to if cancel is pressed.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ReturnUrl",
            "optional": false,
            "description": "<p>URL to redirect user to upon order completion</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "YourAccountUrl",
            "optional": false,
            "description": "<p>URL where user can be directed to by amazon if they wish to lookup order status. (don&#39;t stree about this, rarely used)</p><hint>&lt;![CDATA[Returns parameters necessary for CBA interaction:merchantid: the checkout by amazon assigned merchantid (referred to as [merchantid] in the example below)b64xml: a base64 encoded xml order object based on the current cart geometry referred to as [b64xml], BUT passed to amazon following &quot;order:&quot;signature: a sha1, base64 encoded concatenation of the b64xml and the configured cba secret key refrerred to as [signature] in the example below, AND passed to amazon following &quot;signature:&quot;aws-access-key-id: a public string cba needs to identify this merchant refrred to as [aws-access-key-id] AND passed to amazon following the &quot;aws-access-key-id:&quot; parameterTo generate/create a payment button, suggested parameters are: color: orange, size: small, background: white<a href=\"https://payments.amazon.com/gp/cba/button?ie=UTF8&amp;color=[color]&amp;background=[background]&amp;size=[size\">https://payments.amazon.com/gp/cba/button?ie=UTF8&amp;color=[color]&amp;background=[background]&amp;size=[size</a>]ex:<a href=\"https://payments.amazon.com/gp/cba/button?ie=UTF8&amp;color=orange&amp;background=white&amp;size=small\">https://payments.amazon.com/gp/cba/button?ie=UTF8&amp;color=orange&amp;background=white&amp;size=small</a>Use this as the <strong>your button image url</strong> in the example.The [formurl] is created by the developer using the merchant id, specify either sandbox or non-sandbox (live):<a href=\"https://payments.amazon.com/checkout/[merchantid\">https://payments.amazon.com/checkout/[merchantid</a>]<a href=\"https://payments-sandbox.amazon.com/checkout/[merchantid]?debug=true\">https://payments-sandbox.amazon.com/checkout/[merchantid]?debug=true</a>]]&gt;</hint><p><example title=\"Example\">&lt;![CDATA[</p><p>&lt;!- NOTE: you do NOT need to include jquery if you already are using jquery -&gt;</p><script type=\"text/javascript\" src=\"https://images-na.ssl-images-amazon.com/images/G/01/cba/js/jquery.js\"></script><p><script type=\"text/javascript\" src=\"https://images-na.ssl-images-amazon.com/images/G/01/cba/js/widget/widget.js\"></script></p><form method=POST action=\"https://payments.amazon.com/checkout/[merchantid]\">"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "=",
            "optional": false,
            "description": "<p>&quot;hidden&quot; name=&quot;order-input&quot; value=&quot;type:merchant-signed-order/aws-accesskey/1;order:[b64xml];signature:[signature];aws-access-key-id:[aws-access-key-id]</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "cartCSRShortcut",
    "title": "cartCSRShortcut",
    "name": "cartCSRShortcut",
    "group": "admin",
    "description": "<p>Returns a 4-6 digit authorization token that can be used by a call center operator to identify a session.  CSR shortcuts are only valid for approximately 10 minutes.TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "csr",
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
    "url": "cartCheckoutValidate",
    "title": "cartCheckoutValidate",
    "name": "cartCheckoutValidate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "sender",
            "optional": false,
            "description": "<p>stage (LOGIN,BILLING_LOCATION,SHIPPING_LOCATION,ORDER_CONFIRMATION,ADMIN)</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@issues",
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
    "url": "cartCouponAdd",
    "title": "cartCouponAdd",
    "name": "cartCouponAdd",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "coupon",
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
    "url": "cartDetail",
    "title": "cartDetail",
    "name": "cartDetail",
    "group": "admin",
    "description": "<p>Lists the contents/settings in a cart along with summary valuesTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "create1/0",
            "optional": false,
            "description": "<ul><li>shall we create a cart if the cart requested doesn&#39;t exit?</li></ul>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "cartGiftcardAdd",
    "title": "cartGiftcardAdd",
    "name": "cartGiftcardAdd",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "giftcard",
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
    "url": "cartGoogleCheckoutURL",
    "title": "cartGoogleCheckoutURL",
    "name": "cartGoogleCheckoutURL",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "analyticsdata",
            "optional": false,
            "description": "<p>(required, but may be blank) obtained by calling getUrchinFieldValue() in the pageTracker or _gaq Google Analytics object.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "edit_cart_url",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "continue_shopping_url",
            "optional": false,
            "description": "<hint>&lt;![CDATA[Google has extensive documentation on it&#39;s checkout protocols, you need use buttons served by google.MORE INFO: <a href=\"http://code.google.com/apis/checkout/developer/index.html#google_checkout_buttons\">http://code.google.com/apis/checkout/developer/index.html#google_checkout_buttons</a>NOTE: googleCheckoutMerchantId is passed in the config.js if it&#39;s blank, the configuration is incomplete and don&#39;ttry using it as a payment method.To select a button you will need to know the merchant id (which is returned by this call), the style andvariant type of the button. Examples are provided below so hopefully you can skip reading it! You must use their button(s). Possible: style: white|trans, Possible variant: text|disable]]&gt;</hint><caution>&lt;![CDATA[note: if one or more items in the cart has &#39;gc:blocked&#39; set to true - then google checkout button must beshown as DISABLED using code below:<a href=\"https://checkout.google.com/buttons/checkout.gif?merchant_id=[merchantid]&amp;w=160&amp;h=43&amp;style=[style]&amp;variant=[variant]&amp;loc=en_US\">https://checkout.google.com/buttons/checkout.gif?merchant_id=[merchantid]&amp;w=160&amp;h=43&amp;style=[style]&amp;variant=[variant]&amp;loc=en_US</a>These are Googles branding guidelines, hiding the button (on a website) can lead to stern reprimand and even termination from Google programs such as &quot;trusted merchant&quot;.]]&gt;</caution><hint>&lt;![CDATA[Here is example HTML that would be used with the Asynchronous Google Analytics tracker (_gaq).<a href=\"javascript:_gaq.push(function() {   var pageTracker = _gaq._getAsyncTracker();setUrchinInputCode(pageTracker);});   document.location='$googlecheckout_url?analyticsdata='+getUrchinFieldValue();\"><img height=43 width=160 border=0     src=\"https://checkout.google.com/buttons/checkout.gif?merchant_id=[merchantid]&w=160&h=43&style=[style]&variant=[variant]&loc=en_US\"    ></a>]]&gt;</hint>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "googleCheckoutMerchantId",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "URL",
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
    "url": "cartItemAppend",
    "title": "cartItemAppend",
    "name": "cartItemAppend",
    "group": "admin",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "cartItemUpdate",
    "title": "cartItemUpdate",
    "name": "cartItemUpdate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "stidxyz",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "uuidxyz",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "quantity1",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "_msgs",
            "optional": false,
            "description": "<p>(contains a count of the number of messages)</p><errors><err id=\"9101\" type=\"cfgerr\">Item cannot be added to cart due to price not set.</err><err id=\"9102\" type=\"cfgerr\">could not lookup pogs</err><err id=\"9103\" type=\"cfgerr\">Some of the items in this kit are not available for purchase: </err><err id=\"9000\" type=\"cfgerr\">Unhandled item detection error</err><err id=\"9001\" type=\"cfgerr\">Product xyz is no longer available</err><err id=\"9002\" type=\"cfgerr\">Product xyz has already been purchased</err></errors>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "cartItemsInventoryVerify",
    "title": "cartItemsInventoryVerify",
    "name": "cartItemsInventoryVerify",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "trace0",
            "optional": false,
            "description": "<p>|1    (optional)</p><example>%changes = [    [ sku1: newqty, sku2:newqty ]    ]</example>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "cartOrderCreate",
    "title": "cartOrderCreate",
    "name": "cartOrderCreate",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "iama",
            "optional": false,
            "description": "<p>some string that makes sense to you</p>"
          },
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
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "_uuid",
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
    "url": "cartOrderStatus",
    "title": "cartOrderStatus",
    "name": "cartOrderStatus",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "orderid",
            "optional": false,
            "description": ""
          }
        ],
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
    "url": "cartPaymentQ",
    "title": "cartPaymentQ",
    "name": "cartPaymentQ",
    "group": "admin",
    "description": "<p>Manipulate or display the PaymentQ (a list of payment types for a given cart/order)TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "cmd",
            "optional": false,
            "description": "<p>&quot; required=&quot;1reset|delete|insert|sync</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ID",
            "optional": false,
            "description": "<p>&quot; optional=&quot;0required for cmd=delete|insert</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "TN",
            "optional": false,
            "description": "<p>&quot; optional=&quot;0required for cmd=insert ex: CASH|CREDIT|PO|etc.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "$",
            "optional": false,
            "description": "<p>$&quot; optional=&quot;0optional for cmd=insert (max to charge on this payment method)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "TWO_DIGIT_TENDER_VARIABLES",
            "optional": false,
            "description": "<p>&quot; optional=&quot;0required for cmd=insert, example: CC, MM, YY, CV for credit card</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "paymentQ",
            "optional": false,
            "description": "<p>[].ID    unique id # for this</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "cartPaypalSetExpressCheckout",
    "title": "cartPaypalSetExpressCheckout",
    "name": "cartPaypalSetExpressCheckout",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "useMobile0",
            "optional": false,
            "description": "<p>|1 (if true - we&#39;ll tell paypal to use the mobile version)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "onal",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>id=&quot;drt&#39;device token&#39; - obtain them from the native IOS paypal library (not required, but useful)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "getBuyerAddress",
            "optional": false,
            "description": "<p>0|1 (if true - paypal will ask shopper for address)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "cancelURL",
            "optional": false,
            "description": "<p>&#39;&#39;   (required, but may be blank for legacy checkout)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "returnURL",
            "optional": false,
            "description": "<p>&#39;&#39;     (required, but may be blank for legacy checkout)</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "URL",
            "optional": false,
            "description": "<p>url to redirect checkout to (checkout will finish with legacy method, but you CAN build your own)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "TOKEN",
            "optional": false,
            "description": "<p>paypal token</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "ACK",
            "optional": false,
            "description": "<p>paypal &quot;ACK&quot; message</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "ERR",
            "optional": false,
            "description": "<p>(optional message from paypal api)</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "_ADDRESS_CHANGED",
            "optional": false,
            "description": "<p>1|0</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "_SHIPPING_CHANGED",
            "optional": false,
            "description": "<p>methodid (the new value of CART-&gt;ship.selected_id)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "cartPromoCodeAdd",
    "title": "cartPromoCodeAdd",
    "name": "cartPromoCodeAdd",
    "group": "admin",
    "description": "<p>TODO</p><note>A promo code can be either a giftcard, or a coupon (we&#39;ll detect which it is)</note>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "promocode",
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
    "url": "cartSet",
    "title": "cartSet",
    "name": "cartSet",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
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
        "content": "Legacy Doc\n<API id=\"cryptTool\">\n<input  id=\"verb\">make-key|make-csr|make-self-signed-crt</input>\n<input  if=\"verb:make-key\" id=\"length\" optional=\"1\">1024|2048|4096</input>\n<output if=\"verb:make-key\" id=\"key\">key text\n<input  if=\"verb:make-csr\" id=\"key\"></input>\n<input  if=\"verb:make-csr\" id=\"company\">any company, inc.</input>\n<input  if=\"verb:make-csr\" id=\"city\"></input>\n<input  if=\"verb:make-csr\" id=\"state\"></input>\n<input  if=\"verb:make-csr\" id=\"fqdn\">www.domain.com</input>\n<output if=\"verb:make-csr\" id=\"csr\">csr text\n<input  if=\"verb:make-self-signed-crt\" id=\"key\"></input>\n<input  if=\"verb:make-self-signed-crt\" id=\"csr\"></input>\n<output if=\"verb:make-self-signed-crt\" id=\"crt\">crt text\n",
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
    "url": "getKeywordAutoComplete",
    "title": "getKeywordAutoComplete",
    "name": "getKeywordAutoComplete",
    "group": "admin",
    "description": "<p>returns a list of matching possible keywords (note: currently disabled pending rewrite)TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "keywords",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "catalog",
            "optional": false,
            "description": "<hint>pass value of catalog=TESTING to always generate an auto-complete result</hint>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "getSearchCatalogs",
    "title": "getSearchCatalogs",
    "name": "getSearchCatalogs",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
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
    "url": "info",
    "title": "info",
    "name": "info",
    "group": "admin",
    "description": "<p>Utility FunctionTODO</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "time",
            "optional": false,
            "description": "<h6 id=\"-\">#</h6>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "media-host",
            "optional": false,
            "description": "<h6 id=\"-\">#</h6>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "api-max-version",
            "optional": false,
            "description": "<h6 id=\"-\">#</h6>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "api-min-version",
            "optional": false,
            "description": "<h6 id=\"-\">#</h6>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "api-our-version",
            "optional": false,
            "description": "<h6 id=\"-\">#</h6><hint>Time is an epoch timestamp (which represents the number of seconds since midnight january 1st, 1970)</hint>"
          }
        ]
      }
    },
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
    "url": "ping",
    "title": "ping",
    "name": "ping",
    "group": "admin",
    "description": "<p>TODO</p><note>Accepts: nothing</note><note>Returns: (nothing of importance)</note>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "pong",
            "optional": false,
            "description": "<p>1</p>"
          }
        ]
      }
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
    "url": "searchResult",
    "title": "searchResult",
    "name": "searchResult",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "=",
            "optional": false,
            "description": "<p>&quot;Required&quot; id=&quot;KEYWORDS</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@products",
            "optional": false,
            "description": "<p>an array of product ids</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@LOG",
            "optional": false,
            "description": "<p>an array of strings explaining how the search was performed (if LOG=1 or TRACEPID non-blank)</p><caution>Using LOG=1 or TRACEPID in a product (non debug) environment will result in the search feature beingdisabled on a site.</caution>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "stub",
    "title": "stub",
    "name": "stub",
    "group": "admin",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": "<note>Does nothing, just a stub.</note>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "time",
    "title": "time",
    "name": "time",
    "group": "admin",
    "description": "<p>Utility/Diagnostic FunctionTODO</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "unix",
            "optional": false,
            "description": "<h6 id=\"-\">#</h6><hint>Unix is an epoch timestamp (which represents the number of seconds since midnight january 1st, 1970)</hint>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "whereAmI",
    "title": "whereAmI",
    "name": "whereAmI",
    "group": "admin",
    "description": "<p>Utility function that returns the city/state/zip of the IP making the call.TODO</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "city",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "state",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "zip",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "country",
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
    "url": "whoAmI",
    "title": "whoAmI",
    "name": "whoAmI",
    "group": "admin",
    "description": "<p>Utility function that returns who the current session is authenticated as.TODO</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "cid",
            "optional": false,
            "description": "<h4 id=\"-customer-buyer-id-\">(customer [buyer] id)</h4>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "email",
            "optional": false,
            "description": "<p>user@fromloggedindomain.com</p><hint>If logged in as an admin sessino you&#39;ll get fun stuff like USERNAME,MID,RESELLER and more.</hint>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appBuyerAuthenticate",
    "title": "appBuyerAuthenticate",
    "name": "appBuyerAuthenticate",
    "group": "app",
    "description": "<p>Authenticates a buyer against an enabled/supported trust serviceTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "authfacebook",
            "optional": false,
            "description": "<p>|google</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "create0",
            "optional": false,
            "description": "<p>|1</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "=",
            "optional": false,
            "description": "<p>&quot;auth=facebook&quot; id=&quot;tokentoken</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "CID",
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
    "url": "appBuyerCreate",
    "title": "appBuyerCreate",
    "name": "appBuyerCreate",
    "group": "app",
    "description": "<p>create a buyer account (currently requires form=wholesale)long term goal is to support flexible <em>per project</em> account signups w/parametersTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "formwholesale",
            "optional": false,
            "description": "<note>See adminCustomerUpdate for a full list of macros</note>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appBuyerDeviceRegistration",
    "title": "appBuyerDeviceRegistration",
    "name": "appBuyerDeviceRegistration",
    "group": "app",
    "description": "<p>verify or create a client registrationTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "verbverifyonly",
            "optional": false,
            "description": "<p>|create</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "deviceidclient",
            "optional": false,
            "description": "<p>generated device key (guid), or well known identifier from device</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "osandroid",
            "optional": false,
            "description": "<p>|appleios</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "onal",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>id=&quot;devicetokendevicetoken (appleios) or registrationid (android) is required     (to avoid religious debatesboth are equivalent -- either is acceptable)</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "CIDclient",
            "optional": false,
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appBuyerExists",
    "title": "appBuyerExists",
    "name": "appBuyerExists",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": "<p>login=email address</p><p>buyer: returns a positive number if buyer exists, or zero if it does not.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appBuyerLogin",
    "title": "appBuyerLogin",
    "name": "appBuyerLogin",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "methodunsecure",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "loginemail",
            "optional": false,
            "description": "<p>address</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "passwordclear",
            "optional": false,
            "description": "<p>text password</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "cidcustomer",
            "optional": false,
            "description": "<p>id</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "scheduleschedule",
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
    "url": "appBuyerPasswordRecover",
    "title": "appBuyerPasswordRecover",
    "name": "appBuyerPasswordRecover",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "login",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "methodemail",
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
    "url": "appCaptchaGet",
    "title": "appCaptchaGet",
    "name": "appCaptchaGet",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": "<p><errors></p><p><err id=\"10000\" type=\"apperr\">Profile %s could not be loaded.</err></p><p><err id=\"10001\" type=\"apperr\">Profile request was blank/empty.</err></p><p><err id=\"10002\" type=\"apperr\">No profile was requested.</err></errors></p><note><strong>*</strong> NOT FINISHED <em>**</em></note>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appCartCreate",
    "title": "appCartCreate",
    "name": "appCartCreate",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "cartDetail",
            "optional": false,
            "description": "<hint>You should take care to maintain your cart in a local persisent cookie.<br>This is <em>your</em> responsibility to pass this value on subsequent requests. (use appCartExists to test to see if it&#39;s valid)</hint>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appCartExists",
    "title": "appCartExists",
    "name": "appCartExists",
    "group": "app",
    "description": "<p>This call tells if a cart/session has been previously created/saved. Since release 201314 it is not necessary to use because cart id&#39;s can now be created on the fly by an app.TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "exists",
            "optional": false,
            "description": "<p>1/0</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appCategoryDetail",
    "title": "appCategoryDetail",
    "name": "appCategoryDetail",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "safe.safe.path",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "detail",
            "optional": false,
            "description": "<p>fast|more|max</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "@subcategoryDetail",
            "optional": false,
            "description": "<p>detail:more or detail:max</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "exists",
            "optional": false,
            "description": "<p>1|0</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "pretty",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "sort",
            "optional": false,
            "description": ""
          },
          {
            "group": "Response",
            "type": "String",
            "field": "%meta",
            "optional": false,
            "description": "<p>[ &quot;dst&quot;:&quot;value&quot;, &quot;dst&quot;:&quot;value&quot; ]</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@products",
            "optional": false,
            "description": "<p>[pid1,pid2,pid3]  detail=fast is the same as detail=more</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "subcategoryCount",
            "optional": false,
            "description": "<h1 id=\"of-children\">of children</h1>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@subcategories",
            "optional": false,
            "description": "<p>[ &#39;.safe.sub1&#39;, &#39;safe.sub2&#39;, &#39;.safe.sub3&#39; ];</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "<errors>",
          "content": "<errors>\n<err id=\"8001\" type=\"warning\">Requested Category does not exist.</err>\n</errors>\n",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appCategoryList",
    "title": "appCategoryList",
    "name": "appCategoryList",
    "group": "app",
    "description": "<p>TODO</p><note>Accepts no parameters</note>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "root",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1.root.category.path</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@paths",
            "optional": false,
            "description": "<p>[&#39;.&#39;,&#39;.safe1&#39;,&#39;.safe2&#39;]</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appConfig",
    "title": "appConfig",
    "name": "appConfig",
    "group": "app",
    "description": "<p>TODO</p><note>Accepts no parameters</note>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appEmailSend",
    "title": "appEmailSend",
    "name": "appEmailSend",
    "group": "app",
    "description": "<p>TODO</p><caution>a single ip is limited to 25 emails in a 24 hour period.</caution>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "methodtellafriend",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "=",
            "optional": false,
            "description": "<p>&quot;method:tellafriend&quot; id=&quot;productproductid</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appEventAdd",
    "title": "appEventAdd",
    "name": "appEventAdd",
    "group": "app",
    "description": "<p>User events are the facility for handling a variety of &quot;future&quot; and &quot;near real time&quot; backend operations.Each event has a name that describes what type of object it is working with ex: CART, ORDER, PRODUCT, CUSTOMERthen a period, and what happened (or should happen in the future) ex: CART.GOTSTUFF, ORDER.CREATED, PRODUCT.CHANGEDcustom program code can be associated with a users account to &quot;listen&quot; for specific events and then take action.TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "eventCART.REMARKET",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "pid",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1product id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "pids",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1multiple product id&#39;s (comma separated)</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "safe",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1category id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "sku",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1inventory id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "cid",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1customer(buyer) id</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "email",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1customer email</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "more",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1a user defined field (for custom events)</p><note>in addition each event generated will record: sdomain, ip, and cartid</note>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "uuid",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1&quot; hint=&quot;to create a future event&quot; &gt;a unique identifier (cart id will be used if not specified)</p><p>&lt;input id=&quot;dispatch_gmt&quot; optional=&quot;1&quot; hint=&quot;to create a future event an epoch timestamp when the future event should dispatch</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appFAQs",
    "title": "appFAQs",
    "name": "appFAQs",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "onal",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>id=&quot;filter-keywords keywords</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "=",
            "optional": false,
            "description": "<p>&quot;method:topics|all&quot; id=&quot;@topics     an array of faq topics</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appGiftcardValidate",
    "title": "appGiftcardValidate",
    "name": "appGiftcardValidate",
    "group": "app",
    "description": "<p>TODO</p><caution>a single ip is limited to 25 requests in a 24 hour period.</caution>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "giftcard",
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
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appMashUpSQS",
    "title": "appMashUpSQS",
    "name": "appMashUpSQS",
    "group": "app",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appNavcatDetail",
    "title": "appNavcatDetail",
    "name": "appNavcatDetail",
    "group": "app",
    "description": "<p>see adminNavcatDetail (identical)</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appNewsletterList",
    "title": "appNewsletterList",
    "name": "appNewsletterList",
    "group": "app",
    "description": "<p>shows all publically available newsletters/listsTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appPageGet",
    "title": "appPageGet",
    "name": "appPageGet",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "PATH",
            "optional": false,
            "description": "<p>.path.to.page or @CAMPAIGNID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "@get",
            "optional": false,
            "description": "<p>[ &#39;attrib1&#39;, &#39;attrib2&#39;, &#39;attrib3&#39; ]</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "all",
            "optional": false,
            "description": "<p>set to 1 to return all fields (handy for json libraries which don&#39;t return @get=[])</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "%page",
            "optional": false,
            "description": "<p>[ &#39;attrib1&#39;:&#39;xyz&#39;, &#39;attrib2&#39;:&#39;xyz&#39; ],</p><note>leave @get empty @get = [] for all page attributes</note>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appPageSet",
    "title": "appPageSet",
    "name": "appPageSet",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "PATH",
            "optional": false,
            "description": "<p>.path.to.page or @CAMPAIGNID</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "%page",
            "optional": false,
            "description": "<p>an associative array of values you want updated</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "attrib",
            "optional": false,
            "description": "<note>leave @get empty @get = [] for all page attributes</note>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appProductCategories",
    "title": "appProductCategories",
    "name": "appProductCategories",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "pidproductid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "showOnlyCategories1",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "detailless",
            "optional": false,
            "description": ""
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@categories",
            "optional": false,
            "description": "<p>[ &#39;.safe.path.1&#39;, &#39;.safe.path.2&#39; ];</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appProductGet",
    "title": "appProductGet",
    "name": "appProductGet",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "pidproductid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "verversion",
            "optional": false,
            "description": "<p>#</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "withVariations1",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "withInventory1",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "withSchedule1",
            "optional": false,
            "description": "<p><note>NOT IMPLEMENTED: navcatsPlease=1 = showOnlyCategories=1</note></p><p><example>[    &#39;pid&#39; : product-id,    &#39;%attribs&#39; : [ &#39;zoovy:prod_name&#39;=&gt;&#39;xyz&#39; ],    &#39;@variations&#39; : [ JSON POG OBJECT ],    &#39;@inventory&#39; : [ &#39;sku1&#39; : [ &#39;inv&#39;:1, &#39;res&#39;:2 ], &#39;sku2&#39; : [ &#39;inv&#39;:3, &#39;res&#39;:4 ] ],]</example></p><p><caution>This does not apply schedule pricing.</caution></p><hint>to tell if a product exists check the value &quot;zoovy:prod_created_gmt&quot;.It will not exist, or be set to zero if the product has been deleted or does not exist OR is not accessible on the current partition.</hint>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appProductList",
    "title": "appProductList",
    "name": "appProductList",
    "group": "app",
    "description": "<p>deprecatedTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "srcnavcat",
            "optional": false,
            "description": "<p>:.path.to.safename</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "srcsearch",
            "optional": false,
            "description": "<p>:keywords</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "srccart",
            "optional": false,
            "description": "<p>:</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@products",
            "optional": false,
            "description": "<p>[&#39;pid1&#39;,&#39;pid2&#39;,&#39;pid3&#39;]</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appProductSelect",
    "title": "appProductSelect",
    "name": "appProductSelect",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "product_selector",
            "optional": false,
            "description": "<p>navcat=.path.to.safenameCSV=pid1,pid2,pid3CREATED=STARTYYYMMDD|ENDYYYMMDDRANGE=pid1|pid2MANAGECAT=/managecatSEARCH=keywordPROFILE=PROFILE</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@products",
            "optional": false,
            "description": "<p>[&#39;pid1&#39;,&#39;pid2&#39;,&#39;pid3&#39;]</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appProfileInfo",
    "title": "appProfileInfo",
    "name": "appProfileInfo",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "profile",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "domain",
            "optional": false,
            "description": "<p><note>Returns: profile data in key value format. </note></p><errors><err id=\"10000\" type=\"apperr\">Profile %s could not be loaded.</err><err id=\"10001\" type=\"apperr\">Profile request was blank/empty.</err><err id=\"10002\" type=\"apperr\">No profile was requested.</err></errors>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appPublicSearch",
    "title": "appPublicSearch",
    "name": "appPublicSearch",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "typeproduct",
            "optional": false,
            "description": "<p>|faq|blog</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "type",
            "optional": false,
            "description": "<p>[&#39;product&#39;,&#39;blog&#39;]</p><note>if not specified then: type:_all is assumed.</note><note>www.elasticsearch.org/guide/reference/query-dsl/</note>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "modeelastic-search",
            "optional": false,
            "description": "<p>,elastic-count,elastic-msearch,elastic-mlt,elastic-suggest,elastic-explain,elastic-scroll,elastic-scroll-helper,elastic-scroll-clear</p><p><hint>elastic-search: a query or filter search, this is probably what you want.elastic-count: same parameters as query or search, but simply returns a count of matcheselastic-msearch: a method for passing multiple pipelined search requests (ex: multiple counts) in one callelastic-mlt: &quot;More Like This&quot; uses field/terms to find other documents (ex: products) which are similarelastic-suggest: used to run did-you-mean or search-as-you-type suggestion requests,     which can also be run as part of a &quot;search()&quot; request.</p><h1 id=\"http-www-elasticsearch-org-guide-en-elasticsearch-reference-current-search-suggesters-completion-html\"><a href=\"http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-suggesters-completion.html\">http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-suggesters-completion.html</a></h1><p>elastic-explain: explains why the specified document did or did not match a query, and how the relevance score was calculated. elastic-scroll,elastic-scroll-helper,elastic-scroll-clear: used to interate through scroll results using a scroll_id</p><p><a href=\"http://search.cpan.org/~drtech/Search-Elasticsearch-1.10/lib/Search/Elasticsearch/Client/Direct.pm\">http://search.cpan.org/~drtech/Search-Elasticsearch-1.10/lib/Search/Elasticsearch/Client/Direct.pm</a></a></p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "=",
            "optional": false,
            "description": "<p>&quot;mode:elastic-*&quot; id=&quot;filter { &#39;term&#39;:{ &#39;profile&#39;:&#39;DEFAULT&#39; } };</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "size",
            "optional": false,
            "description": "<p>100 # number of results</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "sort",
            "optional": false,
            "description": "<p>[&#39;_score&#39;,&#39;base_price&#39;,&#39;prod_name&#39;]</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "from",
            "optional": false,
            "description": "<p>100    # start from result # 100</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "scroll",
            "optional": false,
            "description": "<p>30s,1m,5m</p><note>&lt;![CDATA[Filter is an exact match, whereas query is a token/substring match - filter is MUCH faster and should be usedwhen the exact value is known (ex: tags, profiles, upc, etc.)<ul> KNOWN KEYS:<em> pid</em> skus: [ &#39;PID:ABCD&#39;, &#39;PID:ABCE&#39; ]<em> options : [ &#39;Size: Large&#39;, &#39;Size: Medium&#39;, &#39;Size: Small&#39; ]</em> pogs: [ &#39;AB&#39;, &#39;ABCD&#39;, &#39;ABCE&#39; ]<em> tags: [ IS_FRESH, IS_NEEDREVIEW, IS_HASERRORS, IS_CONFIGABLE, IS_COLORFUL, IS_SIZEABLE, IS_OPENBOX, IS_PREORDER, IS_DISCONTINUED, IS_SPECIALORDER, IS_BESTSELLER, IS_SALE, IS_SHIPFREE, IS_NEWARRIVAL, IS_CLEARANCE, IS_REFURB, IS_USER1, ..]</em> images: [ &#39;path/to/image1&#39;, &#39;path/to/image2&#39; ]<em> ean, asin, upc, fakeupc, isbn, prod_mfgid</em> accessory_products: [ &#39;PID1&#39;, &#39;PID2&#39;, &#39;PID3&#39; ]<em> related_products: [ &#39;PID1&#39;, &#39;PID2&#39;, &#39;PID3&#39; ]</em> base_price: amount<em>100 (so $1.00 = 100)</em> keywords: [ &#39;word1&#39;, &#39;word2&#39;, &#39;word3&#39; ]<em> assembly: [ &#39;PID1&#39;, &#39;PID2&#39;, &#39;PID3&#39; ],</em> prod_condition: [ &#39;NEW&#39;, &#39;OPEN&#39;, &#39;USED&#39;, &#39;RMFG&#39;, &#39;RFRB&#39;, &#39;BROK&#39;, &#39;CRAP&#39; ]<em> prod_name, description, detail</em> prod_features<em> prod_is</em> prod_mfg<em> profile</em> salesrank</ul>]]&gt;</note>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@products",
            "optional": false,
            "description": "<p>an array of product ids</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "field": "@LOG",
            "optional": false,
            "description": "<p>an array of strings explaining how the search was performed (if LOG=1 or TRACEPID non-blank)</p><caution>Using LOG=1 or TRACEPID in a product (non debug) environment will result in the search feature beingdisabled on a site.</caution>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appResource",
    "title": "appResource",
    "name": "appResource",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "filenamefilename.json",
            "optional": false,
            "description": "<note><em> shipcodes.json</em> shipcountries.json<em> payment_status.json</em> flexedit.json <em> review_status.json : a complete list of all valid review codes</em> integrations.json : used to identify the MKT values in syndication/orders<em> email_macros.json : </em> inventory_conditions.json : a complete list of all inventory conditions<em> ups_license.json :</em> syndication_buy_storecodes.json<em> syndication_buy_categories.json</em> syndication_wsh_categories.json<em> syndication_goo_categories.json</em> definitions/amz/[catalog].json : replace [catalog] with contents of amz:catalog field.</note>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "json",
            "optional": false,
            "description": "<p>content to eval</p><p>NOTE: You may also request filename.yaml or filename.xml (and the corresponding xml: or yaml: format will be returned)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appReviewAdd",
    "title": "appReviewAdd",
    "name": "appReviewAdd",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "pidproductid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "SUBJECT",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "RATING",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "CUSTOMER_NAME",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "LOCATION",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "MESSAGE",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "BLOG_URL",
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
    "url": "appReviewsList",
    "title": "appReviewsList",
    "name": "appReviewsList",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "pidproductid",
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
    "url": "appSearchLogList",
    "title": "appSearchLogList",
    "name": "appSearchLogList",
    "group": "app",
    "description": "<p>lists available search log filesTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appSearchLogRemove",
    "title": "appSearchLogRemove",
    "name": "appSearchLogRemove",
    "group": "app",
    "description": "<p>permanently remove/delete all search logsTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "FILEreference",
            "optional": false,
            "description": "<p>file id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appSendMessage",
    "title": "appSendMessage",
    "name": "appSendMessage",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "msgtype",
            "optional": false,
            "description": "<p>feedback</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "sender",
            "optional": false,
            "description": "<p>user@domain.com   [the sender of the message]</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "subject",
            "optional": false,
            "description": "<p>subject of the message</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "body",
            "optional": false,
            "description": "<p>body of the message</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "onal",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>id=&quot;PRODUCTproduct-id-this-tellafriend-is-about</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appShippingTransitEstimate",
    "title": "appShippingTransitEstimate",
    "name": "appShippingTransitEstimate",
    "group": "app",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "@products",
            "optional": false,
            "description": "<p>[pid1,pid2,pid3]</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ship_postal92012",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "ship_countryUS",
            "optional": false,
            "description": "<note></note>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "=",
            "optional": false,
            "description": "<p>&quot;@Services<br>&lt;![CDATA[                           {                             &#39;arrival_time&#39; =&gt; &#39;23:00:00&#39;,                             &#39;amzcc&#39; =&gt; &#39;UPS&#39;,                             &#39;UPS.Service.Description&#39; =&gt; &#39;UPS Ground&#39;,                             &#39;UPS.EstimatedArrival.DayOfWeek&#39; =&gt; &#39;TUE&#39;,                             &#39;carrier&#39; =&gt; &#39;UPS&#39;,                             &#39;expedited&#39; =&gt; &#39;0&#39;,                             &#39;UPS.Guaranteed&#39; =&gt; &#39;Y&#39;,                             &#39;method&#39; =&gt; &#39;UPS Ground&#39;,                             &#39;code&#39; =&gt; &#39;UGND&#39;,                             &#39;ups&#39; =&gt; &#39;GND&#39;,                             &#39;arrival_date&#39; =&gt; &#39;20120715&#39;,                             &#39;amzmethod&#39; =&gt; &#39;UPS Ground&#39;,                             &#39;buycomtc&#39; =&gt; &#39;1&#39;,                             &#39;upsxml&#39; =&gt; &#39;03&#39;,                             &#39;UPS.EstimatedArrival.PickupDate&#39; =&gt; &#39;2012-07-10&#39;,                             &#39;transit_days&#39; =&gt; 5                           } ]]&gt;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appStash",
    "title": "appStash",
    "name": "appStash",
    "group": "app",
    "description": "<p>store a keyTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "keykey",
            "optional": false,
            "description": "<p>you want to store</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "valuevalue",
            "optional": false,
            "description": "<p>you want to store</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appSuck",
    "title": "appSuck",
    "name": "appSuck",
    "group": "app",
    "description": "<p>retrieve a keyTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "keykey",
            "optional": false,
            "description": "<p>you want to store</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "value",
            "optional": false,
            "description": "<p>key you want to store</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appMashUpHTTPS",
    "title": "appMashUpHTTPS",
    "group": "app",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appMashUpHTTP",
    "title": "appMashUpHTTP",
    "group": "app",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appMashUpSQL",
    "title": "appMashUpSQL",
    "group": "app",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appMashUpRedis",
    "title": "appMashUpRedis",
    "group": "app",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "appMashUpMemCache",
    "title": "appMashUpMemCache",
    "group": "app",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerAddressAddUpdate",
    "title": "buyerAddressAddUpdate",
    "name": "buyerAddressAddUpdate",
    "group": "buyer",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": "<notes>&lt;![CDATA[shortcut:tag for this address ex: &#39;HOME&#39; (must be unique within bill or ship)type:bill    bill/countrycode:US    bill/email:user@domain    bill/firstname:    bill/lastname:    bill/fullname:    bill/phone:    bill/state:    bill/zip: type:ship<br>    ship/address1:    ship/address2:    ship/city:    ship/countrycode:US    ship/fullname:    ship/firstname:    ship/lastname:    ship/phone:    ship/region:    ship/postal:NOTE: (fullname) or (firstname lastname)NOTE: (country) or (countrycode) ]]&gt;</notes>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerAddressDelete",
    "title": "buyerAddressDelete",
    "name": "buyerAddressDelete",
    "group": "buyer",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": "<p>Returns:</p><CODE>type:SHIP|BILLshortcut:DEFAULT</CODE>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerDetail",
    "title": "buyerDetail",
    "name": "buyerDetail",
    "group": "buyer",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerLogout",
    "title": "buyerLogout",
    "name": "buyerLogout",
    "group": "buyer",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
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
    "url": "buyerNotificationAdd",
    "title": "buyerNotificationAdd",
    "name": "buyerNotificationAdd",
    "group": "buyer",
    "description": "<p>Used to register a buyer for a notification when a inventory is back in stock.TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "typeinventory",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "=",
            "optional": false,
            "description": "<p>&quot;type:inventory&quot; id=&quot;emailuser@somedomain.com</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerOrderGet",
    "title": "buyerOrderGet",
    "name": "buyerOrderGet",
    "group": "buyer",
    "description": "<p>Grabs a raw order object (buyer perspective) so that status information can be displayed. TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": "<hint>In order to access an order status the user must either be an authenticated buyer, OR use softauth=order withcartid + either orderid or erefid</hint>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "softauthorder",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "erefid",
            "optional": false,
            "description": "<p>(conditionally-required for softauth=order) external reference identifier (ex: ebay sale #) or amazon order #</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "orderid",
            "optional": false,
            "description": "<p>(conditionally-required for softauth=order) internal zoovy order #</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "cartid",
            "optional": false,
            "description": "<p>(conditionally-required for softauth=order) internal cartid #</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerOrderPaymentAdd",
    "title": "buyerOrderPaymentAdd",
    "name": "buyerOrderPaymentAdd",
    "group": "buyer",
    "description": "<p>Adds and processes a new payment transaction on an order.TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "orderid2012-01-1234",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "tenderCREDIT",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "amt",
            "optional": false,
            "description": "<p>(optional - will default to order balance_due) transaction amount</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "uuid",
            "optional": false,
            "description": "<p>(optional - will be autogenerated if not supplied) unique identifier for this transaction</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "payment.cc",
            "optional": false,
            "description": "<p>(required on tender=CREDIT) Credit card #</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "payment.yy",
            "optional": false,
            "description": "<p>(required on tender=CREDIT) Credit card Expiration Year</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "payment.mm",
            "optional": false,
            "description": "<p>(required on tender=CREDIT) Credit card Expiration Month</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "payment.cv",
            "optional": false,
            "description": "<p>(required on tender=CREDIT) Credit card CVV/CID #</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerPasswordUpdate",
    "title": "buyerPasswordUpdate",
    "name": "buyerPasswordUpdate",
    "group": "buyer",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": "<p>password:newpassword</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerProductListAppendTo",
    "title": "buyerProductListAppendTo",
    "name": "buyerProductListAppendTo",
    "group": "buyer",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": "<p>listid=sku=OPTIONAL:    qty=(will default to zero)    priority=# (will defualt to zero)    note=    (optional string up to 255 characters)    replace=1    (will delete any existing value from the list, and re-add this one)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerProductListRemoveFrom",
    "title": "buyerProductListRemoveFrom",
    "name": "buyerProductListRemoveFrom",
    "group": "buyer",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": "<p>listid=sku=</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerPurchaseHistory",
    "title": "buyerPurchaseHistory",
    "name": "buyerPurchaseHistory",
    "group": "buyer",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "onal",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>id=&quot;POOL RECENT,COMPLETED, etc.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerPurchaseHistoryDetail",
    "title": "buyerPurchaseHistoryDetail",
    "name": "buyerPurchaseHistoryDetail",
    "group": "buyer",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": ""
          },
          {
            "group": "Request",
            "type": "String",
            "field": "orderid",
            "optional": false,
            "description": "<caution>This can ONLY be used for authenticated buyers.</caution>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerTicketCreate",
    "title": "buyerTicketCreate",
    "name": "buyerTicketCreate",
    "group": "buyer",
    "description": "<p>creates a new ticket for a customerTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
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
    "url": "buyerTicketList",
    "title": "buyerTicketList",
    "name": "buyerTicketList",
    "group": "buyer",
    "description": "<p>shows a list of ticket for a buyerTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
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
    "url": "buyerTicketUpdate",
    "title": "buyerTicketUpdate",
    "name": "buyerTicketUpdate",
    "group": "buyer",
    "description": "<p>updates a ticket for a buyerTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
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
    "url": "buyerUpdate",
    "title": "buyerUpdate",
    "name": "buyerUpdate",
    "group": "buyer",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "@updates",
            "optional": false,
            "description": "<p>Returns:</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerWalletAdd",
    "title": "buyerWalletAdd",
    "name": "buyerWalletAdd",
    "group": "buyer",
    "description": "<p>creates a new wallet for the associated buyerTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CCCredit",
            "optional": false,
            "description": "<p>Card #</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "YY2",
            "optional": false,
            "description": "<p>Digit Year</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "MM2",
            "optional": false,
            "description": "<p>Digit Month</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "field": "IP4",
            "optional": false,
            "description": "<p>digit numeric ip address</p>"
          }
        ],
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "IDwallet",
            "optional": false,
            "description": "<p>id # (on success)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerWalletDelete",
    "title": "buyerWalletDelete",
    "name": "buyerWalletDelete",
    "group": "buyer",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": "<p>walletid:#####</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerWalletList",
    "title": "buyerWalletList",
    "name": "buyerWalletList",
    "group": "buyer",
    "description": "<p>Displays a list of walletsTODO</p>",
    "parameter": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "field": "@walletsan",
            "optional": false,
            "description": "<p>array of wallets</p><p><code type=\"json\" title=\"@wallets sample output\">[    { ID:walletid1, IS_DEFAULT:1|0, DESCRIPTION:description },    { ID:walletid2, IS_DEFAULT:1|0, DESCRIPTION:description },    { ID:walletid3, IS_DEFAULT:1|0, DESCRIPTION:description },]</code></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "buyerWalletSetPreferred",
    "title": "buyerWalletSetPreferred",
    "name": "buyerWalletSetPreferred",
    "group": "buyer",
    "description": "<p>TODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "_cartid",
            "optional": false,
            "description": "<p>walletid:#####</p>"
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