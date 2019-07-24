
import styles from './goods.css';
import { Card, Button } from 'antd'
import { connect } from 'dva'
import { Component } from 'react';

@connect(
  state => ({
    loading: state.loading,
    goodList: state.goods
  }),
  {
    addGood: title => ({
      type: 'goods/addGood',// action的type需要命名空间+reducer名称
      payload: { title }
    }),
    getList: () => ({
      type: 'goods/getList'
    })
  }
)
export default class extends Component {
  componentDidMount() {
    this.props.getList()
  }
  render() {
    if (this.props.loading.models.goods) {
      return <div>加载中... </div>
    }
    return (
      <div className={styles.normal} >
        <h1>Page goods</h1>
        {/* 商品列表 */}
        <div>

          {this.props.goodList.map(good => {
            return (
              <Card key={good.title}>
                <div>{good.title}</div>
              </Card>
            )
          })}
        </div>
        <div>
          <Button
            onClick={() => this.props.addGood('商品' + new Date().getTime())}>
            添加商品</Button>
        </div>
      </div>
    );
  }
}
