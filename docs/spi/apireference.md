---
sidebar_position: 12
slug: /apireference
---

# API Reference

:::caution

API URL: https://spicya.sdaotools.xyz/

:::

:::caution

What is a Tag? A Tag is the notation we use for defining a specific token on Tezos. Most token lists are filtered by tag.

Tezos has two popular standards, FA1.2 and FA2. In this context, the important facts are that FA2s contain a "token_id", FA1.2s do not.

Tags take the form of ```CONTRACT:TOKEN_ID```, where ```TOKEN_ID == 'null'``` (this is a string!!) if FA1.2

Example FA2 Tag: 'KT19ovJhcsUn4YU8Q5L3BGovKSixfbWcecEA:1'

Example FA1.2 Tag: 'KT1K9gCRgaLRFKTErYt1wVxA3Frb9FjasjTV:null'

:::


This is a summary of the currently available public endpoints for the SpicySwap GraphQL API. Feel free to reach out and request new API endpoints! Also, on request we will grant access to the full **/graphql** endpoint for deeper querying

#### /api/rest/SpicyDailyMetrics

```
query SpicyDailyMetrics {
  spicy_day_data(order_by: {day: desc}, limit: 60) {
    dailyvolumextz
    dailyvolumeusd
    totalliquidityxtz
    totalvolumextz
    totalvolumeusd
    totalliquidityusd
    totalstakedfarmxtz
    totalstakedfarmusd
    dailylpapr
    dailyspiapr
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
    reservextz
    reserveusd
    dailyvolumextz
    dailyvolumeusd
    totalstakedfarmxtz
    totalstakedfarmusd
    dailylpapr
    dailyspiapr
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
    dailyvolumeusd
    totalliquidityxtz
    totalliquidityusd
    derivedxtz_high
    derivedxtz_low
    derivedxtz_open
    derivedxtz_close
    derivedusd_high
    derivedusd_low
    derivedusd_open
    derivedusd_close
  }
  token_hour_data(limit: 168, order_by: {hour: desc}, where: {tag: {_ilike: $_ilike}}) {
    hour
    tag
    hourlyvolumetoken
    hourlyvolumextz
    hourlyvolumeusd
    derivedxtz
    derivedxtz_high
    derivedxtz_low
    derivedxtz_open
    derivedxtz_close
    derivedusd
    derivedusd_high
    derivedusd_low
    derivedusd_open
    derivedusd_close
  }
}
```

#### /api/rest/PoolListAll

```
query PoolListAll ($hour_agg_start: Int = 0, $day_agg_start: Int = 0) {
  pair_info(order_by: {reservextz: desc}) {
    pair_id
    reserve0
    reserve1
    reservextz
    reserveusd
    token0
    token0price
    token1
    token1price
    txcount
    volumetoken0
    volumetoken1
    totalstakedfarmxtz
    totalstakedfarmusd
    contract
    pairHourData_aggregate(limit: 24, order_by: {hour_ts: desc}, where: {hour_ts: {_gte: $hour_agg_start}}) {
      aggregate {
        sum {
          hourlyvolumextz
        }
      }
      aggregate {
        sum {
          hourlyvolumeusd
        }
      }
    }
    pairDayData_aggregate(limit: 7, order_by: {day_ts: desc}, where: {day_ts: {_gte: $day_agg_start}}) {
      aggregate {
        sum {
          dailyvolumextz
        }
      }
      aggregate {
        sum {
          dailyvolumeusd
        }
      }
    }
    token_a {
      derivedxtz
      derivedusd
    }
    token_b {
      derivedxtz
      derivedusd
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
    derivedusd
    totalliquidityusd
    tokenDayData_aggregate(limit: 7, order_by: {day_ts: desc}, where: {day_ts: {_gte: $day_agg_start}}) {
      aggregate {
        sum {
          dailyvolumextz
        }
      }
      aggregate {
        sum {
          dailyvolumeusd
        }
      }
    }
    tokenDayData(limit: 1, offset: 2, order_by: {day_ts: desc}) {
      last_price: derivedxtz
      last_price_usd: derivedusd
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
    contract
    user
    type
  }
}


```