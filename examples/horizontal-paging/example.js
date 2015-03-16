var ScrollViewFramework = window["ReactScrollView"];
var Models = ScrollViewFramework.JSCoreGraphics.CoreGraphics.Geometry.DataTypes;
var EdgeInsets = ScrollViewFramework.JSCoreGraphics.Kit.DataTypes.EdgeInsets;

var collectionViewSize = new Models.Size({height: 512, width:512});
var cellSize = new Models.Size({height:collectionViewSize.height, width:collectionViewSize.width});

var _images =[];
_images.push("http://icons.iconarchive.com/icons/yellowicon/game-stars/256/Mario-icon.png");
_images.push("http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Racoon-Mario-icon.png");
_images.push("http://www.mitchelaneous.com/wp-content/uploads/2009/11/marioyoshi1.png");
_images.push("http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Shell-Red-icon.png");
_images.push("http://png-4.findicons.com/files/icons/2297/super_mario/256/question_coin.png");
_images.push("http://files.igameu.com/app/921/2926516a43178d76ecee2547ae94236a-256.png");
_images.push("http://files.igameu.com/app/921/2926516a43178d76ecee2547ae94236a-256.png");

var numberPages = 1000;
var _imagesIndex = 0;
var pages = [];
for(var i = 0; i < numberPages; i++) {
    if(_imagesIndex >= _images.length) {
        _imagesIndex = 0;
    }
    pages.push(new SimpleImageFactory(_images[_imagesIndex], i));
    _imagesIndex++;
}

function SimpleImageFactory(imgSrc, index) {
    var Img = ScrollViewFramework.React.createElement("img",
        {
            src: imgSrc,
            style: {width: "100%"}
        });

    return ScrollViewFramework.React.createElement("div",
        {
            style: {width: cellSize.width, height: cellSize.height, position: "relative", display: "block", float: "left"},
            key: index.toString() + "-" + imgSrc
        }, Img);
}

var frame = new Models.Rect({
    origin: new Models.Point({x:0, y:0}),
    size: new Models.Size({height:collectionViewSize.height, width:collectionViewSize.width})
});

var contentSize = new Models.Size({
    width: cellSize.width*numberPages,
    height: cellSize.height
});

var props = {
    content: pages,
    frame: frame,
    contentSize: contentSize,
    shouldUpdate: true,
    paging: true,
    scrollTimeout: 150,
    pagingDirection: "ScrollDirectionTypeHorizontal",
    debugScroll: true
};

var scrollView = React.createElement(ScrollViewFramework.ScrollView, props);

ScrollViewFramework.React.render(scrollView, document.getElementById("reactContainer"));