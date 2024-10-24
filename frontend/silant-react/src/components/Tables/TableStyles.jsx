import styled from 'styled-components'


export const Styles = styled.div`
  .table {
    border: 1px solid #ddd;
    font-family: Regular, serif;
    border-radius: 10px;
    text-align: center;

    
    
 
    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }
 
    .th,
    .td {
      padding: 3px;
      border-bottom: 3px solid #ddd;
      border-right: 3px solid #ddd;
      background-color: #fff;
      overflow: hidden;
 
      :last-child {
        border-right: 10px;

      }
    }
 
    &.sticky {
      overflow-x:scroll;
      // overflow: scroll;
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }
 
      .header {
        top: 2;
        box-shadow: 0px 3px 3px #ccc;
      }
 
      .footer {
        bottom: 0;
        box-shadow: 0px -3px 0px #ccc;
      }
 
      .body {
        background-color: #EBE6D6;
        position: relative;
        z-index: 1;
      }
 
      [data-sticky-td] {
        position: sticky;
      }
 
      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;

      }
 
      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
        border-radius: 2px;
        
      }
    }
  }
`