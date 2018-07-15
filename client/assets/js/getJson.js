var currentSearch = location.search.split("=").slice(1).join(' ');

currentSearch = currentSearch.toLowerCase();
if (currentSearch.includes("san")) {
  console.log('san fran')
  $.getJSON('assets/JSON/SanFranciscoJSON.js', {format: "json"}).done(function(data) {
    data.forEach(function(e, i) {
      $('.job-browse.section .col-md-9').append(`
          <div class="job-list">
                    <div class="thumb">
                      <a href="job-details.html"><img src="assets/img/jobs/img-1.jpg" alt=""></a>
                    </div>
                    <div class="job-list-content">
                      <h4><a href="job-details.html">${e.Title}</a><span class="full-time ${e.FullTIme}">Full-Time</span><span class="part-time ${e.PartTime}">Part-Time</span></h4>
                      <p>${e.Description}</p>
                      <div class="job-tag">
                        <div class="pull-left">
                          <div class="meta-tag">
                            <span><a href="browse-categories.html"><i class="ti-brush"></i>Art/Design</a></span>
                            <span><i class="ti-location-pin"></i>Cupertino, CA, USA</span>
                            <span><i class="ti-time"></i>60/Hour</span>
                            <span class="job-tags ${e.Remote}">Remote</span>
                          </div>
                        </div>
                        <div class="pull-right">
                          <div class="icon">
                            <i class="ti-heart"></i>
                          </div>
                          <div class="btn btn-common btn-rm">More Detail</div>
                        </div>
                      </div>
                    </div>
                  </div>
        `)
    })
  });
} else if (currentSearch.includes("austin")) {
  console.log('austin')
  $.getJSON('assets/JSON/AustinJSON.js', {format: "json"}).done(function(data) {
    data.forEach(function(e, i) {
      $('.job-browse.section .col-md-9').append(`
          <div class="job-list">
                    <div class="thumb">
                      <a href="job-details.html"><img src="assets/img/jobs/img-1.jpg" alt=""></a>
                    </div>
                    <div class="job-list-content">
                      <h4><a href="job-details.html">${e.Title}</a><span class="full-time ${e.FullTIme}">Full-Time</span><span class="part-time ${e.PartTime}">Part-Time</span></h4>
                      <p>${e.Description}</p>
                      <div class="job-tag">
                        <div class="pull-left">
                          <div class="meta-tag">
                            <span><a href="browse-categories.html"><i class="ti-brush"></i>Art/Design</a></span>
                            <span><i class="ti-location-pin"></i>Cupertino, CA, USA</span>
                            <span><i class="ti-time"></i>60/Hour</span>
                            <span class="job-tags ${e.Remote}">Remote</span>
                          </div>
                        </div>
                        <div class="pull-right">
                          <div class="icon">
                            <i class="ti-heart"></i>
                          </div>
                          <div class="btn btn-common btn-rm">More Detail</div>
                        </div>
                      </div>
                    </div>
                  </div>
        `)
    })

  });
} else {
  console.log('other')
  $.getJSON('assets/JSON/mockJSON.js', {format: "json"}).done(function(data) {
    data.forEach(function(e, i) {
      $('.job-browse.section .col-md-9').append(`
          <div class="job-list">
                    <div class="thumb">
                      <a href="job-details.html"><img src="assets/img/jobs/img-1.jpg" alt=""></a>
                    </div>
                    <div class="job-list-content">
                      <h4><a href="job-details.html">${e.Title}</a><span class="full-time ${e.FullTIme}">Full-Time</span><span class="part-time ${e.PartTime}">Part-Time</span></h4>
                      <p>${e.Description}</p>
                      <div class="job-tag">
                        <div class="pull-left">
                          <div class="meta-tag">
                            <span><a href="browse-categories.html"><i class="ti-brush"></i>Art/Design</a></span>
                            <span><i class="ti-location-pin"></i>Cupertino, CA, USA</span>
                            <span><i class="ti-time"></i>60/Hour</span>
                            <span class="job-tags ${e.Remote}">Remote</span>
                          </div>
                        </div>
                        <div class="pull-right">
                          <div class="icon">
                            <i class="ti-heart"></i>
                          </div>
                          <div class="btn btn-common btn-rm">More Detail</div>
                        </div>
                      </div>
                    </div>
                  </div>
        `)
    })

  });
}
