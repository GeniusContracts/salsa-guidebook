---
sidebar_position: 3
---

# API Reference

:::caution

Under Construction!

:::


This is a summary of the currently available public endpoints for the SpicySwap GraphQL API. Feel free to reach out and request new API endpoints! Also, on request we will grant access to the full **/graphql** endpoint for deeper querying

#### /api/rest/SpicyDailyMetrics

```
query SpicyDailyMetrics {
  spicy_day_data(order_by: {day: desc}, limit: 60) {
    dailyvolumextz
    totalliquidityxtz
    day
    txcount
  }
}
```

#### /api/rest/PoolDailyMetrics

```
query PoolDailyMetrics($_ilike: String = "") {
  pair_day_data(limit: 60, order_by: {day: desc}, where: {pair_id: {_ilike: $_ilike}}) {
    pair_id
    dailyvolumextz
    reservextz
    day
  }
}
```

#### /api/rest/TokenDailyMetrics

```
query TokenDailyMetrics($_ilike: String = "") {
  token_day_data(limit: 60, order_by: {day: desc}, where: {tag: {_ilike: $_ilike}}) {
    day
    tag
    dailyvolumextz
    totalliquidityxtz
  }
}
```

#### /api/rest/PoolList

```
query PoolList($_eq: bigint = 0, $hour_agg_start: Int = 0, $day_agg_start: Int = 0) {
  pair_info(order_by: {reservextz: desc}, where: {pair_id: {_eq: $_eq}}) {
    pair_id
    reserve0
    reserve1
    reservextz
    token0
    token0price
    token1
    token1price
    txcount
    volumetoken0
    volumetoken1
    volumeusd
    contract
    pairHourData_aggregate(limit: 24, order_by: {hour_ts: desc}, where: {hour_ts: {_gte: $hour_agg_start}}) {
      aggregate {
        sum {
          hourlyvolumextz
        }
      }
    }
    pairDayData_aggregate(limit: 7, order_by: {day_ts: desc}, where: {day_ts: {_gte: $day_agg_start}}) {
      aggregate {
        sum {
          dailyvolumextz
        }
      }
    }
    token_a {
      derivedxtz
    }
    token_b {
      derivedxtz
    }
  }
}
```

#### /api/rest/TokenList

```
query TokenList($_ilike: String = "%%", $day_agg_start: Int = 0) {
  tokens(limit: 100, order_by: {totalliquidityxtz: desc}, where: {tag: {_ilike: $_ilike}}) {
    name
    symbol
    decimals
    img
    tag
    derivedxtz
    totalliquidityxtz
    tokenDayData_aggregate(limit: 7, order_by: {day_ts: desc}, where: {day_ts: {_gte: $day_agg_start}}) {
      aggregate {
        sum {
          dailyvolumextz
        }
      }
    }
  }
}
```

#### /api/rest/TransactionList

```
query TransactionList($_ilike: String = "%%") {
  actions(order_by: {finish: desc}, where: {user: {_ilike: $_ilike}}) {
    token_in
    token_in_amount
    token_out
    token_out_amount
    finish
    pair_id
    user
    type
  }
}

```