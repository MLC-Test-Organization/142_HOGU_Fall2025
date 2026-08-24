var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "1091",
  "level": "1",
  "url": "#1091",
  "type": "Article",
  "number": "",
  "title": "MATH 142 Hands-On, Grades Up",
  "body": " MATH 142 Hands-On, Grades Up   For workspace between exercises, print this worksheet or download to your device by clicking the printer icon.     Session #11 (Section 4.6)  Directions: Answer each of the following as best you can. Feel free to discuss your thoughts about the questions with some peers around you. For additional practice problems and explanations, refer to the Math 142 textbook which is free and can be downloaded as a PDF at Texas A&M The OAKTrust Digital Repository .    Getting Warmed Up and In the Right Mindset....    Shade in the area between the curves and on the interval .   Graph of the functions used in the problem.       Shade in the area between the curves and on the interval .   Graph of the functions used in the problem.       Shade in the area bounded by the curves and .   Graph of the functions used in the problem.       Shade in the area bounded by the curve and the -axis.   Graph of the functions used in the problem.       Let us get our hands on!    Now...Grades Go Up!    "
},
{
  "id": "1091-3-3-2",
  "level": "2",
  "url": "#1091-3-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Shade in the area between the curves and on the interval .   Graph of the functions used in the problem.    "
},
{
  "id": "1091-3-3-3",
  "level": "2",
  "url": "#1091-3-3-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Shade in the area between the curves and on the interval .   Graph of the functions used in the problem.    "
},
{
  "id": "session11-warmup-3",
  "level": "2",
  "url": "#session11-warmup-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Shade in the area bounded by the curves and .   Graph of the functions used in the problem.    "
},
{
  "id": "session11-warmup-4",
  "level": "2",
  "url": "#session11-warmup-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Shade in the area bounded by the curve and the -axis.   Graph of the functions used in the problem.    "
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
