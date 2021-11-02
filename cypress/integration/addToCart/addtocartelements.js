export const product={
  product_link: () =>cy.get('.card-block a').eq(2),
  productImage: () => cy.get('.active img'),
  productTitle: () => cy.get('#tbodyid .name'),
  productprice: () => cy.get('h3.price-container'),
  productDescription: () => cy.get('div.description'),
  addtocartbutton: ()=>cy.get('div.product-content.product-wrap.clearfix.product-deatil:nth-child(6) div.row div.col-md-7.col-sm-12.col-xs-12 div.row:nth-child(7) div.col-sm-12.col-md-6.col-lg-6 > a.btn.btn-success.btn-lg'),
  cartlink: () => cy.get('#cartur'),
  categoriesList: ()=> cy.get('body:nth-child(2) div.container:nth-child(6) div.row div.col-lg-3 > div.list-group'),
  productsAdded: () => cy.get('.success'),
  totalPricedetails: () => cy.get('#totalp'),
  cartPageTitle: () => cy.get('.col-lg-8 h2'),
  tableHeadImage: () => cy.get('thead th').eq(0),
  tableHeadTitle: () => cy.get('thead th').eq(1),
  tableHeadPrice: () => cy.get('thead th').eq(2),
  tableHeadDelete: () => cy.get('thead th').eq(3),
  productselectionname: () => cy.get('div.row div.col-lg-8 div.table-responsive:nth-child(2) table.table.table-bordered.table-hover.table-striped tbody:nth-child(2) tr.success > td:nth-child(2)'),
  productselectionprice: () => cy.get('div.row div.col-lg-8 div.table-responsive:nth-child(2) table.table.table-bordered.table-hover.table-striped tbody:nth-child(2) tr.success > td:nth-child(3)'),
  deleteproduct: () => cy.get('div.row div.col-lg-8 div.table-responsive:nth-child(2) table.table.table-bordered.table-hover.table-striped tbody:nth-child(2) tr.success td:nth-child(4) > a:nth-child(1)')



}