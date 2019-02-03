/*!
 * jquery.instagramFeed
 *
 * @version 1.0
 *
 * @author Javier Sanahuja Liebana <bannss1@gmail.com>
 *
 * https://github.com/BanNsS1/jquery.instagramFeed
 *
 */
(function(e){var l={username:"",container:"",display_profile:!0,display_biography:!0,display_gallery:!0,get_raw_json:!1,callback:null,styling:!0,items:8,items_per_row:4,margin:.5};e.instagramFeed=function(b){b=e.fn.extend({},l,b);""==b.username&&""==b.tag?console.log("Instagram Feed: Error, no username or tag found."):b.get_raw_json||""!=b.container?b.get_raw_json&&null==b.callback?console.log("Instagram Feed: Error, no callback defined to get the raw json"):e.get("https://www.instagram.com/"+b.username,
function(a){a=a.split("window._sharedData = ");a=a[1].split("\x3c/script>");a=a[0];a=a.substr(0,a.length-1);a=JSON.parse(a);a=a.entry_data.ProfilePage[0].graphql.user;if(b.get_raw_json)b.callback(JSON.stringify({id:a.id,username:a.username,full_name:a.full_name,is_private:a.is_private,is_verified:a.is_verified,biography:a.biography,followed_by:a.edge_followed_by.count,following:a.edge_follow.count,images:a.edge_owner_to_timeline_media.edges}));else{var d="",f="",g="",h="",k="";b.styling&&(d=" style='text-align:center;'",
f=" style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'",g=" style='font-size:1.2em;'",h=" style='font-size:1em;'",k=" style='margin:"+b.margin+"% "+b.margin+"%;width:"+(100-2*b.margin*b.items_per_row)/b.items_per_row+"%;float:left;'");var c="";b.display_profile&&(c=c+("<div class='instagram_profile'"+d+">")+("\t<img class='instagram_profile_image' src='"+a.profile_pic_url+"' alt='"+b.username+" profile pic'"+f+" />"),c+="\t<p class='instagram_username'"+g+">@"+a.full_name+" (<a href='https://www.instagram.com/"+
b.username+"'>@"+b.username+"</a>)</p>");b.display_biography&&(c+="\t<p class='instagram_biography'"+h+">"+a.biography+"</p>");b.display_profile&&(c+="</div>");if(b.display_gallery)if(a.is_private)c+="<p class='instagram_private'><strong>This profile is private</strong></p>";else{a=a.edge_owner_to_timeline_media.edges;max=a.length>b.items?b.items:a.length;c+="<div class='instagram_gallery'>";for(d=0;d<max;d++)c+="<a href='https://www.instagram.com/p/"+a[d].node.shortcode+"' target='_blank'>",c+="\t<img src='"+
a[d].node.thumbnail_src+"' alt='"+b.username+" instagram image "+d+"'"+k+" />",c+="</a>";c+="</div>"}e(b.container).html(c)}}):console.log("Instagram Feed: Error, no container found.")}})(jQuery);