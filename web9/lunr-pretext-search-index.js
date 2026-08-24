var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "8972",
  "level": "1",
  "url": "#8972",
  "type": "Article",
  "number": "",
  "title": "MATH 142 Hands-On, Grades Up",
  "body": " MATH 142 Hands-On, Grades Up   For workspace between exercises, print this worksheet or download to your device by clicking the printer icon.    Session #9 (4.1 and 4.2)  Directions: Answer each of the following as best you can. Feel free to discuss your thoughts about the questions with some peers around you. For additional practice problems and explanations, refer to the Math 142 textbook which is free and can be downloaded as a PDF at Texas A&M The OAKTrust Digital Repository .    Getting Warmed Up and in the Right Mindset    Complete the following antiderivative rules.     Constant Rule:  , where is any real number.      Power Rule:  , where is any real number with .  Special Case:       Exponential Rule:  , where is a positive real number.  Special Case:        Sum\/Difference Rule:        Constant Multiple Rule:  where is any real number.       Let Us Get Our Hands On    The most general antiderivative of is    Use the space below to check your answer by differentiating your result.      Find .  Check your answer by differentiating your result.      Find .  Check your answer by differentiating your result.      Find the following indefinite integrals.                                         Find the constant of integration for given .      Find the specific antiderivative of given .      Find the specific antiderivative of given .      For each indefinite integral below, find an appropriate substitution, rewrite the integral in terms of the new variable, and then compute the indefinite integral.     Given , let __________ and __________.  Rewrite the integral in terms of and evaluate.      Given , let __________ and __________.  Rewrite the integral in terms of and evaluate.      Given , let __________ and __________.  Rewrite the integral in terms of and evaluate.       Find .      Find .      Now Grades Go Up    A company has a marginal revenue function given by dollars per item when items are sold. Find the company's revenue function when items are sold.      The marginal cost for a company when items are produced can be modeled by dollars per item when items are produced. If it costs to produce 10 items, what is the cost to produce 20 items?      "
},
{
  "id": "8972-3-3-2",
  "level": "2",
  "url": "#8972-3-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Complete the following antiderivative rules.     Constant Rule:  , where is any real number.      Power Rule:  , where is any real number with .  Special Case:       Exponential Rule:  , where is a positive real number.  Special Case:        Sum\/Difference Rule:        Constant Multiple Rule:  where is any real number.    "
},
{
  "id": "8972-3-4-2",
  "level": "2",
  "url": "#8972-3-4-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  The most general antiderivative of is    Use the space below to check your answer by differentiating your result.   "
},
{
  "id": "8972-3-4-3",
  "level": "2",
  "url": "#8972-3-4-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Find .  Check your answer by differentiating your result.   "
},
{
  "id": "8972-3-4-4",
  "level": "2",
  "url": "#8972-3-4-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Find .  Check your answer by differentiating your result.   "
},
{
  "id": "8972-3-4-5",
  "level": "2",
  "url": "#8972-3-4-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Find the following indefinite integrals.                                      "
},
{
  "id": "8972-3-4-6",
  "level": "2",
  "url": "#8972-3-4-6",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Find the constant of integration for given .   "
},
{
  "id": "8972-3-4-7",
  "level": "2",
  "url": "#8972-3-4-7",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Find the specific antiderivative of given .   "
},
{
  "id": "8972-3-4-8",
  "level": "2",
  "url": "#8972-3-4-8",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  Find the specific antiderivative of given .   "
},
{
  "id": "8972-3-4-9",
  "level": "2",
  "url": "#8972-3-4-9",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "  For each indefinite integral below, find an appropriate substitution, rewrite the integral in terms of the new variable, and then compute the indefinite integral.     Given , let __________ and __________.  Rewrite the integral in terms of and evaluate.      Given , let __________ and __________.  Rewrite the integral in terms of and evaluate.      Given , let __________ and __________.  Rewrite the integral in terms of and evaluate.    "
},
{
  "id": "8972-3-4-10",
  "level": "2",
  "url": "#8972-3-4-10",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": "  Find .   "
},
{
  "id": "8972-3-4-11",
  "level": "2",
  "url": "#8972-3-4-11",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "",
  "body": "  Find .   "
},
{
  "id": "8972-3-5-2",
  "level": "2",
  "url": "#8972-3-5-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  A company has a marginal revenue function given by dollars per item when items are sold. Find the company's revenue function when items are sold.   "
},
{
  "id": "8972-3-5-3",
  "level": "2",
  "url": "#8972-3-5-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  The marginal cost for a company when items are produced can be modeled by dollars per item when items are produced. If it costs to produce 10 items, what is the cost to produce 20 items?   "
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
