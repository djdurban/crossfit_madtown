---
layout: gallery
title: Gallery
navTitle: true
---

<div class="row">
    <div class="col-md-8 col-md-offset-2 ">
        <div id="thumbnails">
            <div class="modal-wrapper">
                {% for image in site.data.gallery-images %}
                <a href="{{image.large}}" title="{{image.description}}" data-ui="{{ forloop.index }}"><img src="{{image.thumb}}" alt="{{image.description}}">Test</a>
                {% endfor %}
                <div class="large-image">
                    <div class="modal-body">
                        {% for image in site.data.gallery-images %}
                        <img src="{{image.large}}" alt="{{image.description}}" id="{{ forloop.index }}"> 
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



