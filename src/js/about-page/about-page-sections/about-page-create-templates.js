import jQuery from 'jquery';

jQuery('.about-section__info-datatitle').each(function() {
    let $this = jQuery(this);
    let parts = $this.text().match(/^(\d+)(.*)/);
    if (parts.length < 2) return;
    
    let scale = 20;
    let delay = 7;
    let end = 0+parts[1];
    let next = 0;
    let suffix = parts[2];
    
    let runUp = function() {
        let show = Math.ceil(next);
        $this.text(''+show+suffix);
        if (show == end) return;
        next = next + (end - next) / scale;
        window.setTimeout(runUp, delay);
    }
    runUp();
});