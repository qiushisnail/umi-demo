let data = [{ title: 'web全栈' }, { title: 'java架构' }]
export default {
  "get /api/goods": function (req, res) {
    setTimeout((
      res.json({
        result: data
      })
    ), 1000)
  }
}