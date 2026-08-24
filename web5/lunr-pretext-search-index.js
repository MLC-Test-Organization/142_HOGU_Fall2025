var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "5503",
  "level": "1",
  "url": "#5503",
  "type": "Article",
  "number": "",
  "title": "MATH 142 Hands-On, Grades Up",
  "body": " MATH 142 Hands-On, Grades Up   For workspace between exercises, print this worksheet or download to your device by clicking the printer icon.     Session #5 (Sections 2.5 and 2.6)  Directions: Answer each of the following as best you can. Feel free to discuss your thoughts about the questions with some peers around you. For additional practice problems and explanations, refer to the Math 142 textbook which is free and can be downloaded as a PDF at Texas A&M The OAKTrust Digital Repository .    Getting Warmed Up and in the Right Mindset    Fill in the blanks to complete the special cases of the chain rule. The Chain Rule: If and are differentiable functions, then   Special Cases of Chain Rule: If is a differentiable function, is any real number, and is any positive real number, then   Generalized Power Rule: If , then     Generalized Exponential (base ) Rule: If , then     Generalized Logarithm (base ) Rule: If , then           In this exercise, we are going to find the derivative of in two different ways and then compare the answers.     Rewrite as the product of two binomials. Then multiply the two binomials together (i.e., FOIL) and then take the derivative of the resulting sum.      Now use the chain rule to find . Do you get the same result as part (a) above?       Let Us Get Our Hands On    Find the derivatives of each function given below. Do not simplify your answers after you have applied the appropriate derivative rules.                                              Let be a differentiable function. The values of and are given in the table below and the graph of is shown.     Graph of a function plotted on coordinate axes. Refer to image description for more detail.   [FIX]       Values of and                             Let Find .    Let . Find .    Let . Find . ( Hint: Use part (a) to find and . )      Use implicit differentiation to find for the curve .      Use implicit differentiation to find for the curve .      Find the equation of the line that is tangent to the curve at .      Now Grades Go Up    The cost to produce keychains in a day for a particular company is given by dollars. Use marginal analysis to approximate the cost of producing the 10th keychain.                       Which of the following is the equation of the line tangent to the curve at the point ?                       "
},
{
  "id": "5503-3-3-2",
  "level": "2",
  "url": "#5503-3-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Fill in the blanks to complete the special cases of the chain rule. The Chain Rule: If and are differentiable functions, then   Special Cases of Chain Rule: If is a differentiable function, is any real number, and is any positive real number, then   Generalized Power Rule: If , then     Generalized Exponential (base ) Rule: If , then     Generalized Logarithm (base ) Rule: If , then        "
},
{
  "id": "5503-3-3-3",
  "level": "2",
  "url": "#5503-3-3-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  In this exercise, we are going to find the derivative of in two different ways and then compare the answers.     Rewrite as the product of two binomials. Then multiply the two binomials together (i.e., FOIL) and then take the derivative of the resulting sum.      Now use the chain rule to find . Do you get the same result as part (a) above?    "
},
{
  "id": "5503-3-4-2",
  "level": "2",
  "url": "#5503-3-4-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Find the derivatives of each function given below. Do not simplify your answers after you have applied the appropriate derivative rules.                                           "
},
{
  "id": "5503-3-4-3",
  "level": "2",
  "url": "#5503-3-4-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Let be a differentiable function. The values of and are given in the table below and the graph of is shown.     Graph of a function plotted on coordinate axes. Refer to image description for more detail.   [FIX]       Values of and                             Let Find .    Let . Find .    Let . Find . ( Hint: Use part (a) to find and . )   "
},
{
  "id": "5503-3-4-4",
  "level": "2",
  "url": "#5503-3-4-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Use implicit differentiation to find for the curve .   "
},
{
  "id": "5503-3-4-5",
  "level": "2",
  "url": "#5503-3-4-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Use implicit differentiation to find for the curve .   "
},
{
  "id": "5503-3-4-6",
  "level": "2",
  "url": "#5503-3-4-6",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Find the equation of the line that is tangent to the curve at .   "
},
{
  "id": "5503-3-5-2",
  "level": "2",
  "url": "#5503-3-5-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  The cost to produce keychains in a day for a particular company is given by dollars. Use marginal analysis to approximate the cost of producing the 10th keychain.                    "
},
{
  "id": "5503-3-5-3",
  "level": "2",
  "url": "#5503-3-5-3",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": "  Which of the following is the equation of the line tangent to the curve at the point ?                    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
