<template>
  <NestedVList :items="menus" :mini="mini" />
</template>

<script>
import NestedVList from '../../../../components/NestedVList'

export default {
  name: 'MenuList',
  props: {
    mini: Boolean,
  },
  components: {
    NestedVList
  },
  data: () => ({
    menus: [
      {
        text: 'Dashboard',
        icon: 'fa fa-dashboard fa-fw',
        link: '/dashboard',
        // If item does not have a link
        // linkName is required to show highlight the link as active
        linkName: 'dashboard',
        children: [
          {
            text: 'Sales Performance Chart',
            icon: 'fa fa-bar-chart fa-fw',
            link: '/dashboard/sales-performance-chart',
            linkName: 'sales-performance-chart',
          },
          {
            text: 'Sales Location',
            icon: 'fa fa-line-chart fa-fw',
            link: '/dashboard/sales-location',
            linkName: 'sales-location',
          },
          {
            text: 'Sales Performance',
            icon: 'fa fa-line-chart fa-fw',
            link: '/dashboard/sales-performance/highlight',
            linkName: 'sales-performance',
          },
          {
            text: 'Sales Operation',
            icon: 'fa fa-gears fa-fw',
            link: '/dashboard/sales-operation/highlight',
            linkName: 'sales-operation',
          },
        ]
      },
      {
        text: 'Report',
        icon: 'fa fa-file fa-fw',
        // If item does not have a link
        // linkName is required to show highlight the link as active
        linkName: 'report',
        children: [
          {
            text: 'Call Report',
            icon: 'fa fa-table fa-fw',
            link: '/report/call-report/smd',
            linkName: 'call-report',
          },
          {
            text: 'Area Report',
            icon: 'fa fa-map-o fa-fw',
            link: '/report/area-report',
            linkName: 'area-report',
          },
          {
            text: 'Effective Call Report',
            icon: 'fa fa-map-o fa-fw',
            link: '/report/effective-call-report/smd',
            linkName: 'effective-call-report',
          },
          {
            text: 'Out of Stock Report',
            icon: 'fa fa-warning fa-fw',
            link: '/report/out-of-stock-report/highlight',
            linkName: 'out-of-stock-report',
          },
          {
            text: 'Cross Border Sell Out',
            icon: 'fa fa-warning fa-fw',
            link: '/report/cross-border-sell-out',
            linkName: 'cross-border-sell-out',
          },
          {
            text: 'Market Visit Report',
            icon: 'fa fa-map-marker fa-fw',
            link: '/report/market-visit-report',
            linkName: 'market-visit-report',
          },
          {
            text: 'Order Recommendation',
            icon: 'fa fa-stack-exchange fa-fw',
            link: '/report/order-recommendation',
            linkName: 'order-recommendation',
          },
          {
            text: 'Check Investment',
            icon: 'fa fa-balance-scale fa-fw',
            link: '/report/check-investment',
            linkName: 'check-investment',
          },
          {
            text: 'Numeric Distribution',
            icon: 'fa fa-balance-scale fa-fw',
            link: '/report/numeric-distribution',
            linkName: 'numeric-distribution',
          },
          {
            text: 'Store Remarks',
            icon: 'fa fa-balance-scale fa-fw',
            link: '/report/store-remarks',
            linkName: 'store-remarks',
          },
        ]
      },
      {
        text: 'Master Data',
        icon: 'fa fa-database fa-fw',
        // If item does not have a link
        // linkName is required to show highlight the link as active
        linkName: 'master-data',
        children: [
          {
            text: 'User Management',
            icon: 'fa fa-male fa-fw',
            link: '/master-data/user-management',
            linkName: 'user-management',
          },
          {
            text: 'Store Management',
            icon: 'fa fa-cubes fa-fw',
            link: '/master-data/store-management',
            linkName: 'store-management',
          },
          {
            text: 'Schedule Management',
            icon: 'fa fa-cubes fa-fw',
            link: '/master-data/schedule-management',
            linkName: 'schedule-management',
          },
          {
            text: 'Area and Account',
            icon: 'fa fa-cubes fa-fw',
            link: '/master-data/area-and-account',
            linkName: 'area-and-account',
          },
          {
            text: 'Device Management',
            icon: 'fa fa-mobile fa-fw',
            link: '/master-data/device-management',
            linkName: 'device-management',
          },
          {
            text: 'Email List',
            icon: 'fa fa-envelope fa-fw',
            link: '/master-data/email-list',
            linkName: 'email-list',
          },
          {
            text: 'MD Management',
            icon: 'fa fa-user-circle fa-fw',
            link: '/master-data/md-management',
            linkName: 'md-management',
          },
          {
            text: 'SMD Management',
            icon: 'fa fa-address-book fa-fw',
            link: '/master-data/smd-management',
            linkName: 'smd-management',
          },
          {
            text: 'QR Code Management',
            icon: 'fa fa-qrcode fa-fw',
            link: '/master-data/qr-code-management',
            linkName: 'qr-code-management',
          },
          {
            text: 'Content Management',
            icon: 'fa fa-sticky-note-o fa-fw',
            link: '/master-data/content-management',
            linkName: 'content-management',
          },
          {
            text: 'News Management',
            icon: 'fa fa-sticky-note-o fa-fw',
            link: '/master-data/news-management',
            linkName: 'news-management',
          },
          {
            text: 'Master Target',
            icon: 'fa fa-crosshairs fa-fw',
            link: '/master-data/master-target',
            linkName: 'master-target',
          },
          {
            text: 'Store Location',
            icon: 'fa fa-cubes fa-fw',
            link: '/master-data/store-location',
            linkName: 'store-location',
          },
          {
            text: 'Mapping Cross Border',
            icon: 'fa fa-cubes fa-fw',
            link: '/master-data/mapping-cross-border',
            linkName: 'mapping-cross-border',
          },
        ]
      },
      {
        text: 'PO Management',
        icon: 'fa fa-inbox fa-fw',
        link: '/po-management',
        linkName: 'po-management'
      },
      {
        text: 'Market Info Management',
        icon: 'fa fa-info fa-fw',
        link: '/market-info-management',
        linkName: 'market-info-management'
      },
    ]
  })
}
</script>

<style>

</style>
