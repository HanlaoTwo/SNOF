import demjson
data =	{"data":
    [{
        "error_no":"0",
        "data":
            [{"rowcount":123,
              "title":"测试1",
              "pushTime":"20121202",
              "pushStatus":"0",
              "pushOperator":"1234",
              "pushNum":"12",
              "perPushNum":"12121",
              "perPushOpen":"12"},
             {
                 "title":"测试2",
                 "pushTime":"20121202",
                 "pushStatus":"1",
                 "pushOperator":"1234",
                 "pushNum":"12",
                 "perPushNum":"12121",
                 "perPushOpen":"12"},
             {
                 "title":"测试3",
                 "pushTime":"20121202",
                 "pushStatus":"1",
                 "pushOperator":"1234",
                 "pushNum":"12",
                 "perPushNum":"12121",
                 "perPushOpen":"12"}]
    }]
}
errorCode = {"errorCode":"0"}
json = demjson.encode(data)
print('Accept: application/json, text/javascript, */*; q=0.01')
print('Content-Type: application/json')
print('Access-Control-Allow-Credentials: true')
print('Access-Control-Allow-Headers: accessToken,Content-Type')
print('Access-Control-Allow-Origin: http://localhost:63342' + '\n')
print(json)