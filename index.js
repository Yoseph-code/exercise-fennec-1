class Fennec {
  static calcProfit(sell, buy) {
    return sell - buy
  }


  static main() {
    const input = new Array(7, 1, 5, 3, 6, 4)

    const sellDay = 5
    const buyDay = 2

    if (sellDay === 0 && buyDay === 0) {
      console.log(0)
    }

    return this.calcProfit(input[sellDay - 1], input[buyDay - 1])
  }
}

console.log(Fennec.main())