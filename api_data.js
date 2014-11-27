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
    "url": "appMashUpHTTP",
    "title": "appMashUpHTTP",
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
    "url": "appMashUpSQL",
    "title": "appMashUpSQL",
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
    "url": "appMashUpHTTPS",
    "title": "appMashUpHTTPS",
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
    "url": "appMashUpRedis",
    "title": "appMashUpRedis",
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
    "url": "appMashUpSFTP",
    "title": " appMashUpSFTP",
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
            "description": "<p></output></p><note>TITLE|SUCCESS|INFO|WARN|STOP|PAUSE|ERROR|DEPRECATION|DEBUG|XML</note>"
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
    "url": "appCategoryDetail",
    "title": "appCategoryDetail",
    "name": "appCategoryDetail",
    "group": "admin",
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
    "url": "appNavcatDetail",
    "title": "appNavcatDetail",
    "name": "appNavcatDetail",
    "group": "admin",
    "description": "<p>see adminNavcatDetail (identical)</p>",
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
        "content": "Legacy Doc\n<API id=\"cryptTool\">\n<input  id=\"verb\">make-key|make-csr|make-self-signed-crt</input>\n<input  if=\"verb:make-key\" id=\"length\" optional=\"1\">1024|2048|4096</input>\n<output if=\"verb:make-key\" id=\"key\">key text</output>\n<input  if=\"verb:make-csr\" id=\"key\"></input>\n<input  if=\"verb:make-csr\" id=\"company\">any company, inc.</input>\n<input  if=\"verb:make-csr\" id=\"city\"></input>\n<input  if=\"verb:make-csr\" id=\"state\"></input>\n<input  if=\"verb:make-csr\" id=\"fqdn\">www.domain.com</input>\n<output if=\"verb:make-csr\" id=\"csr\">csr text</output>\n<input  if=\"verb:make-self-signed-crt\" id=\"key\"></input>\n<input  if=\"verb:make-self-signed-crt\" id=\"csr\"></input>\n<output if=\"verb:make-self-signed-crt\" id=\"crt\">crt text</output>\n",
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
    "url": "adminAffiliateCreate",
    "title": "adminAffiliateCreate",
    "name": "adminAffiliateCreate",
    "group": "other",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAffiliateDetail",
    "title": "adminAffiliateDetail",
    "name": "adminAffiliateDetail",
    "group": "other",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAffiliateList",
    "title": "adminAffiliateList",
    "name": "adminAffiliateList",
    "group": "other",
    "description": "<p>returns a list of projectsTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAffiliateRemove",
    "title": "adminAffiliateRemove",
    "name": "adminAffiliateRemove",
    "group": "other",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAffiliateUpdate",
    "title": "adminAffiliateUpdate",
    "name": "adminAffiliateUpdate",
    "group": "other",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAppTicketCreate",
    "title": "adminAppTicketCreate",
    "name": "adminAppTicketCreate",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAppTicketDetail",
    "title": "adminAppTicketDetail",
    "name": "adminAppTicketDetail",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAppTicketList",
    "title": "adminAppTicketList",
    "name": "adminAppTicketList",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAppTicketMacro",
    "title": "adminAppTicketMacro",
    "name": "adminAppTicketMacro",
    "group": "other",
    "description": "<p>TODO</p><example>&lt;![CDATA[<em> ADDNOTE?note=xyz&amp;private=1|0</em> ASK?<em> UPDATE?escalate=1|0&amp;class=PRESALE|POSTSALE|EXCHANGE|RETURN</em> CLOSE* ]]&gt;</example>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAppTicketRemove",
    "title": "adminAppTicketRemove",
    "name": "adminAppTicketRemove",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminAppTicketSearch",
    "title": "adminAppTicketSearch",
    "name": "adminAppTicketSearch",
    "group": "other",
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
    "url": "adminBlastMacroCreate",
    "title": "adminBlastMacroCreate",
    "name": "adminBlastMacroCreate",
    "group": "other",
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
    "group": "other",
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
    "group": "other",
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
    "group": "other",
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
    "group": "other",
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
    "group": "other",
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
    "url": "adminBlastMacroUpdate",
    "title": "adminBlastMacroUpdate",
    "name": "adminBlastMacroUpdate",
    "group": "other",
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
    "url": "adminBlastMsgCreate",
    "title": "adminBlastMsgCreate",
    "name": "adminBlastMsgCreate",
    "group": "other",
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
    "group": "other",
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
    "group": "other",
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
    "group": "other",
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
    "group": "other",
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
    "group": "other",
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
    "group": "other",
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
    "group": "other",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCIEngineAgentList",
    "title": "adminCIEngineAgentList",
    "name": "adminCIEngineAgentList",
    "group": "other",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCIEngineAgentRemove",
    "title": "adminCIEngineAgentRemove",
    "name": "adminCIEngineAgentRemove",
    "group": "other",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCIEngineAgentUpdate",
    "title": "adminCIEngineAgentUpdate",
    "name": "adminCIEngineAgentUpdate",
    "group": "other",
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
    "group": "other",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCIEngineLogSearch",
    "title": "adminCIEngineLogSearch",
    "name": "adminCIEngineLogSearch",
    "group": "other",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCIEngineMacro",
    "title": "adminCIEngineMacro",
    "name": "adminCIEngineMacro",
    "group": "other",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCampaign",
    "title": "adminCampaign",
    "name": "adminCampaign",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCampaign",
    "title": "adminCampaign",
    "name": "adminCampaign",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCampaignAvailableCoupons",
    "title": "adminCampaignAvailableCoupons",
    "name": "adminCampaignAvailableCoupons",
    "group": "other",
    "description": "<p>a campaign can be associated with a couponTODO</p><output id=\"@COUPONS\"></output>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminCampaignCreate",
    "title": "adminCampaignCreate",
    "name": "adminCampaignCreate",
    "group": "other",
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
    "group": "other",
    "description": "<p>returns a campaign object in %CAMPAIGNTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "CAMPAIGNID",
            "optional": false,
            "description": "<output id=\"%CAMPAIGN\"></output>"
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
    "group": "other",
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
            "description": "<ul><li>CPGCOPY</li><li>CPGTEST?</li><li>CPGSTART?STARTTS=timestamp</li><li>CPGSTOP?</li><li>SUBADD?email=</li><li>SUBDEL?email=*</li></ul>"
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
    "group": "other",
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
    "group": "other",
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
    "url": "adminDSAgentCreate",
    "title": "adminDSAgentCreate",
    "name": "adminDSAgentCreate",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminDSAgentDetail",
    "title": "adminDSAgentDetail",
    "name": "adminDSAgentDetail",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminDSAgentList",
    "title": "adminDSAgentList",
    "name": "adminDSAgentList",
    "group": "other",
    "description": "<p>returns a list of projects</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminDSAgentRemove",
    "title": "adminDSAgentRemove",
    "name": "adminDSAgentRemove",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminDSAgentUpdate",
    "title": "adminDSAgentUpdate",
    "name": "adminDSAgentUpdate",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYAPI-AddFixedPriceItem",
    "title": "adminEBAYAPI-AddFixedPriceItem",
    "name": "adminEBAYAPI-AddFixedPriceItem",
    "group": "other",
    "description": "<p>runs an eBay AddFixedPriceItem (see adminEBAYAPI-AddItem)TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYAPI-AddItem",
    "title": "adminEBAYAPI-AddItem",
    "name": "adminEBAYAPI-AddItem",
    "group": "other",
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
    "group": "other",
    "description": "<p>runs an eBay VerifyAddFixedPriceItem (see adminEBAYAPI-AddItem)TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYAPI-VerifyAddItem",
    "title": "adminEBAYAPI-VerifyAddItem",
    "name": "adminEBAYAPI-VerifyAddItem",
    "group": "other",
    "description": "<p>runs an eBay VerifyAddItem (see adminEBAYAPI-AddItem)TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYMacro",
    "title": "adminEBAYMacro",
    "name": "adminEBAYMacro",
    "group": "other",
    "description": "<p>Modify the eBay ConfigurationTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "PROFILE",
            "optional": false,
            "description": "<p>&quot; optional=&quot;1Profile specific calls require admin</p>"
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
    "group": "other",
    "description": "<p>Returns the data in an eBay launch profileTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYProfileList",
    "title": "adminEBAYProfileList",
    "name": "adminEBAYProfileList",
    "group": "other",
    "description": "<p>Returns the list of possible profilesTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYShippingDetail",
    "title": "adminEBAYShippingDetail",
    "name": "adminEBAYShippingDetail",
    "group": "other",
    "description": "<p>Parses and returns a structured version of the shipping configuration for the profile requestedTODO</p>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "PROFILE",
            "optional": false,
            "description": "<output id=\"@OUR_DOMESTIC\"></output><output id=\"@OUR_INTERNATIONAL\"></output><output id=\"@ALL_LOCATIONS\"></output><output id=\"@OUR_LOCATIONS\"></output><output id=\"@PREFERENCES\"></output><output id=\"@SERVICES_DOMESTIC\"></output><output id=\"@SERVICES_INTERNATIONAL\"></output>"
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
    "group": "other",
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
    "group": "other",
    "description": "<p>performs ebay &#39;GetUser&#39; call to verify current token, returns info associated with the partitionTODO</p><output id=\"@PROFILES\"></output><output id=\"%TOKEN\"></output>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYTokenList",
    "title": "adminEBAYTokenList",
    "name": "adminEBAYTokenList",
    "group": "other",
    "description": "<p>lists all tokens across all partitions (one token per partition)TODO</p><output id=\"@ACCOUNTS\"></output>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEBAYWizardPreview",
    "title": "adminEBAYWizardPreview",
    "name": "adminEBAYWizardPreview",
    "group": "other",
    "description": "<p>-- will need some love --TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEmailMessageClone",
    "title": "adminEmailMessageClone",
    "name": "adminEmailMessageClone",
    "group": "other",
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
    "url": "adminEmailMessageCreate",
    "title": "adminEmailMessageCreate",
    "name": "adminEmailMessageCreate",
    "group": "other",
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
    "url": "adminEmailMessageDetail",
    "title": "adminEmailMessageDetail",
    "name": "adminEmailMessageDetail",
    "group": "other",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEmailMessageList",
    "title": "adminEmailMessageList",
    "name": "adminEmailMessageList",
    "group": "other",
    "description": "<p>returns a list of projectsTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminEmailMessageRemove",
    "title": "adminEmailMessageRemove",
    "name": "adminEmailMessageRemove",
    "group": "other",
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
    "url": "adminEmailMessageUpdate",
    "title": "adminEmailMessageUpdate",
    "name": "adminEmailMessageUpdate",
    "group": "other",
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
    "url": "adminFAQCreate",
    "title": "adminFAQCreate",
    "name": "adminFAQCreate",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminFAQDetail",
    "title": "adminFAQDetail",
    "name": "adminFAQDetail",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminFAQList",
    "title": "adminFAQList",
    "name": "adminFAQList",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminFAQRemove",
    "title": "adminFAQRemove",
    "name": "adminFAQRemove",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminFAQSearch",
    "title": "adminFAQSearch",
    "name": "adminFAQSearch",
    "group": "other",
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
    "url": "adminGiftcardCreate",
    "title": "adminGiftcardCreate",
    "name": "adminGiftcardCreate",
    "group": "other",
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
    "group": "other",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminGiftcardList",
    "title": "adminGiftcardList",
    "name": "adminGiftcardList",
    "group": "other",
    "description": "<p>returns a list of projectsTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminGiftcardMacro",
    "title": "adminGiftcardMacro",
    "name": "adminGiftcardMacro",
    "group": "other",
    "description": "<p>TODO</p><example>&lt;![CDATA[[1:00:00 PM] Brian Horakh: @updates[1:00:10 PM] Brian Horakh: SET/EMAIL?email=&amp;note=[1:00:11 PM] jt: adminGiftcardMacro[1:00:18 PM] Brian Horakh: SET/BALANCE?email=&amp;note=[1:00:35 PM] Brian Horakh: SET/EXPIRES?expires=&amp;note=[1:00:43 PM] Brian Horakh: SET/CARDTYPE?cardtype=&amp;note=Not finished]]&gt;</example>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminGiftcardSearch",
    "title": "adminGiftcardSearch",
    "name": "adminGiftcardSearch",
    "group": "other",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminGiftcardSeriesList",
    "title": "adminGiftcardSeriesList",
    "name": "adminGiftcardSeriesList",
    "group": "other",
    "description": "<p>returns a list of projectsTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminGiftcardSetupProduct",
    "title": "adminGiftcardSetupProduct",
    "name": "adminGiftcardSetupProduct",
    "group": "other",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminGiftcardSetupProduct",
    "title": "adminGiftcardSetupProduct",
    "name": "adminGiftcardSetupProduct",
    "group": "other",
    "description": "<p>creates a product that when purchased automatically creates a giftcardTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPriceScheduleCreate",
    "title": "adminPriceScheduleCreate",
    "name": "adminPriceScheduleCreate",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPriceScheduleDetail",
    "title": "adminPriceScheduleDetail",
    "name": "adminPriceScheduleDetail",
    "group": "other",
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
    "group": "other",
    "description": "<p>Returns a list of available schedule id&#39;s.<br>Each schedule has a unique 6 digit alphanumeric code that is used as an identifier.TODO</p><output id=\"@SCHEDULES\">{ &#39;id&#39;:&#39;SCHED1&#39; },{ &#39;id&#39;:&#39;SCHED2&#39; },{ &#39;id&#39;:&#39;SCHED3&#39; },</output>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminPriceScheduleRemove",
    "title": "adminPriceScheduleRemove",
    "name": "adminPriceScheduleRemove",
    "group": "other",
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
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProductReviewApprove",
    "title": "adminProductReviewApprove",
    "name": "adminProductReviewApprove",
    "group": "other",
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
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProductReviewDetail",
    "title": "adminProductReviewDetail",
    "name": "adminProductReviewDetail",
    "group": "other",
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
    "group": "other",
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
    "group": "other",
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
    "group": "other",
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
    "url": "adminProjectClone",
    "title": "adminProjectClone",
    "name": "adminProjectClone",
    "group": "other",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProjectCreate",
    "title": "adminProjectCreate",
    "name": "adminProjectCreate",
    "group": "other",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProjectDetail",
    "title": "adminProjectDetail",
    "name": "adminProjectDetail",
    "group": "other",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProjectGitMacro",
    "title": "adminProjectGitMacro",
    "name": "adminProjectGitMacro",
    "group": "other",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProjectList",
    "title": "adminProjectList",
    "name": "adminProjectList",
    "group": "other",
    "description": "<p>returns a list of projectsTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProjectRemove",
    "title": "adminProjectRemove",
    "name": "adminProjectRemove",
    "group": "other",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminProjectUpdate",
    "title": "adminProjectUpdate",
    "name": "adminProjectUpdate",
    "group": "other",
    "description": "<p>TODONot finished</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminRSSClone",
    "title": "adminRSSClone",
    "name": "adminRSSClone",
    "group": "other",
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
    "group": "other",
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
    "group": "other",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminRSSList",
    "title": "adminRSSList",
    "name": "adminRSSList",
    "group": "other",
    "description": "<p>returns a list of projectsTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminRSSRemove",
    "title": "adminRSSRemove",
    "name": "adminRSSRemove",
    "group": "other",
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
    "group": "other",
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
    "url": "adminSyndicationAMZLogs",
    "title": "adminSyndicationAMZLogs",
    "name": "adminSyndicationAMZLogs",
    "group": "other",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "DSTmarketplace",
            "optional": false,
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p><output id=\"@ROWS\">    [ pid, sku, feed, ts, msgtype, msg ]</output>"
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
    "group": "other",
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
    "group": "other",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "DSTAMZ",
            "optional": false,
            "description": "<output id=\"@CATEGORIES\">    [ safename, prettyname, thesauruskey, thesaurusvalue ]</output>"
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
    "group": "other",
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
    "group": "other",
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
            "description": "<p>&quot; optional=&quot;1PRODUCTID</p><output id=\"HTML\">Html messaging describing the syndication process + any errors</output>"
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
    "group": "other",
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
    "group": "other",
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
    "description": "<p>displays up to 500 to remove/hide these.TODO</p><output id=\"@ROWS\">    [ timestamp1, sku1, feedtype1, errcode1, errmsg1, batchjob#1 ],    [ timestamp2, sku2, feedtype2, errcode2, errmsg2, batchjob#2 ],</output>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminSyndicationHistory",
    "title": "adminSyndicationHistory",
    "name": "adminSyndicationHistory",
    "group": "other",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "DSTmarketplace",
            "optional": false,
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p><output id=\"@ROWS\">    [ msgtype1, timestamp1, message1 ],    [ msgtype2, timestamp2, message2 ],</output>"
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
    "group": "other",
    "description": "<p>returns a list of marketplaces and their configuration statusTODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminSyndicationListFiles",
    "title": "adminSyndicationListFiles",
    "name": "adminSyndicationListFiles",
    "group": "other",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "field": "DSTmarketplace",
            "optional": false,
            "description": "<p>destination code (usually 3 or 4 digits) which can be obtained from the dst code in appResourceGet &#39;integrations&#39; file</p><output id=\"@FILES\">    { FILENAME, FILETYPE, GUID }</output>"
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
    "group": "other",
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
            "description": "<p>&lt;![CDATA[DELETEENABLEDISABLEUNSUSPENDCLEAR-FEED-ERRORSSAVE?fields=from&amp;input=formDBMAP-NUKE?MAPID=DBMAP-SAVE?MAPID=&amp;CATID=&amp;STOREID=&amp;MAPTXT=AMZ-THESAURUS-DELETE?guid=AMZ-THESAURUS-SAVE?name=&amp;guid=&amp;search_terms&amp;itemtype=&amp;subjectcontent&amp;targetaudience&amp;isgiftwrapavailable&amp;AMZ-SHIPPING-SAVE?Standard=XXX&amp;Expedited=XXY&amp;Scheduled=XXZ&amp;NextDay=XYY&amp;SecondDay=XYZAMZ-TOKEN-UPDATE?marketplaceId=&amp;merchantId=]]&gt;</p>"
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
    "url": "adminSyndicationPublish",
    "title": "adminSyndicationPublish",
    "name": "adminSyndicationPublish",
    "group": "other",
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
            "description": "<p>|INVENTORY</p><output id=\"JOBID\"></output>"
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
    "url": "adminTaskComplete",
    "title": "adminTaskComplete",
    "name": "adminTaskComplete",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTaskCreate",
    "title": "adminTaskCreate",
    "name": "adminTaskCreate",
    "group": "other",
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
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTaskRemove",
    "title": "adminTaskRemove",
    "name": "adminTaskRemove",
    "group": "other",
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
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTemplateCreateFrom",
    "title": "adminTemplateCreateFrom",
    "name": "adminTemplateCreateFrom",
    "group": "other",
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
            "description": "<output id=\"files\"># of files copied</output><output id=\"dirs\"># of sub-directories copied</output>"
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
    "group": "other",
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
    "group": "other",
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
    "group": "other",
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
            "description": "<p>|CPG|CIA|APP</p><output id=\"@TEMPLATES\"></output>"
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
    "group": "other",
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
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTicketFileAttach",
    "title": "adminTicketFileAttach",
    "name": "adminTicketFileAttach",
    "group": "other",
    "description": "<p>ticketid, uuid</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTicketFileGet",
    "title": "adminTicketFileGet",
    "name": "adminTicketFileGet",
    "group": "other",
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
    "group": "other",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTicketFileRemove",
    "title": "adminTicketFileRemove",
    "name": "adminTicketFileRemove",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "adminTicketList",
    "title": "adminTicketList",
    "name": "adminTicketList",
    "group": "other",
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
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "billingInvoiceDetail",
    "title": "billingInvoiceDetail",
    "name": "billingInvoiceDetail",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "billingInvoiceList",
    "title": "billingInvoiceList",
    "name": "billingInvoiceList",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "billingPaymentList",
    "title": "billingPaymentList",
    "name": "billingPaymentList",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "billingPaymentMacro",
    "title": "billingPaymentMacro",
    "name": "billingPaymentMacro",
    "group": "other",
    "description": "<p>TODO</p>",
    "version": "0.0.0",
    "filename": "lib/JSONAPI.pm"
  },
  {
    "type": "POST",
    "url": "billingTransactions",
    "title": "billingTransactions",
    "name": "billingTransactions",
    "group": "other",
    "description": "<p>TODO</p>",
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