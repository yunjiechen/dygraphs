#' interactionModel
#' 
#' interactionModel
#' 
#' @param dygraph Dygraph to add interactionModel to
#'   
#' @return A dygraph that displays a range selector
#'   
#' @note cyj edit
#' \href{http://rstudio.github.io/dygraphs/gallery-roll-periods.html}{online
#' documentation} for additional details and examples.
#' 
#' @export
dyInteractionModel <- function(dygraph) {
  
  interactionModel <- list()
  #interactionModel$mousewheel <- readLines("inst/htmlwidgets/mousescroll.js")
  interactionModel$mousewheel <- 
  JS(
  "function scrollV3(event, g, context) {", 
  "  if (lastClickedGraph != g) {", 
  "    return;", 
  "  }", 
  "  var normal = event.detail ? event.detail * -1 : event.wheelDelta / 40;", 
  "  // For me the normalized value shows 0.075 for one click. If I took", 
  "  // that verbatim, it would be a 7.5%.", 
  "  var percentage = normal / 50;", 
  "  ", 
  "  if (!(event.offsetX && event.offsetY)){", 
  "    event.offsetX = event.layerX - event.target.offsetLeft;", 
  "    event.offsetY = event.layerY - event.target.offsetTop;", 
  "  }", 
  "  ", 
  "  var percentages = offsetToPercentage(g, event.offsetX, event.offsetY);", 
  "  var xPct = percentages[0];", 
  "  var yPct = percentages[1];", 
  "  ", 
  "  zoom(g, percentage, xPct, yPct);", 
  "  Dygraph.cancelEvent(event);", 
  "}")
  
  
  # merge roller
  dygraph$x$attrs <- mergeLists(dygraph$x$attrs, interactionModel)
  
  # return modified dygraph
  dygraph
}
