1. Importing of the required functions like useEffect, useMemo
2. Missing use of types in scenarios such as :
   - useState<>() for prices should be explicitly stated as a Map type as Prices might sound like arrays instead
   - return type of useWalletBalances() -> perhaps WalletBalance[]
   - prices (line 31) & error (35)
3. BoxProps not defined -> Props not defined as a result as well
4. { children, ...rest } -> children not type defined in the props and not used in this scenario
5. console.err() instead of console.error()
6. In sortedBalances, getPriority(balance.blockchain); is unsafe as balance:WalletBalance has no attribute blockchain & once again in the left/right priority const (line 68-69)
7. In the line 60, lhsPriority is not defined and is used to check for priority coins
8. formattedBalances not used at line 85 instead of sortedBalances
9. In the WalletRow component, className = classes.row -> missing import
10. For sortedBalances, the sorting does not consider equal case & does not return 0 for those
11. For sortedBalances, the filtering can be simplified and needs to use balancePriority for the filtering
12. FormattedWalletbalance can extend from WalletBalance for ease
