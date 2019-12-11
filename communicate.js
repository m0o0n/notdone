function newajx(inner){
        console.log(inner);
    var a = inner;
              // var all_articles = $('inside');
               var all_articles = document.getElementById('inside');
               var child_article = all_articles.children;
               for(var i = 0; i<child_article.length; i++){
                   if(child_article[i].classList.contains('craft_article')){
                   console.log(child_article[i]);
                   child_article[i].style.display = "none"}
               }
   
       $.ajax({
           type: 'GET',
           url: 'https://loft-art.com.ua/avpz/Controller/bycategory.php?subject=' + a,
           success: function(data){
               var inside = document.getElementById('inside');
               for(var i = 0; i<data.length; i++){
               var container = document.createElement('div');
               container.classList.add("craft_article");
               var img = document.createElement('div');
               var in_img = document.createElement('img');
               var article = document.createElement('div');
               var article_hader = document.createElement('h1');
               article_hader.setAttribute('id', "article_name");
               var article_txt = document.createElement('p');
               article.classList.add("article");
               in_img.setAttribute('src', 'images/post-10.jpg');
               img.classList.add("img_box");
                   inside.append(container);
                   container.append(img);
                   img.append(in_img);
                   container.append(article);
                   article.append(article_hader);
                   article.append(article_txt);
                   article_txt.innerHTML = data[i].Text;
                   article_hader.innerHTML = data[i].Name;
                   console.log(data[i]);
               }
               //var elem = document.getElementById('article_name');
             //  elem.innerHTML = data[0].Name;
           }
       }); 
   
    }

