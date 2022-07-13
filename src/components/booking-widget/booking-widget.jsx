import React from 'react';
import { Helmet } from 'react-helmet';

const BookingWidget = () => {
    return (
        <div>
            <Helmet>
                <script src="//widget.simplybook.it/v2/widget/widget.js" crossorigin="anonymous" async></script>
                {/* <script>var widget = new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/nailtechtash.simplybook.it","theme":"minimal","theme_settings":{"timeline_show_end_time":"0","timeline_modern_display":"as_slots","hide_company_label":"0","timeline_hide_unavailable":"1","hide_past_days":"0","sb_base_color":"#5f9ea0","btn_color_1":"#5f9ea0,#5f9ea0,#5f9ea0","link_color":"#5f9ea0","display_item_mode":"block","body_bg_color":"#ffffff","sb_review_image":"","dark_font_color":"#2b212b","light_font_color":"#ffffff","sb_company_label_color":"#0f0e0e","hide_img_mode":"0","sb_busy":"#aaa6aa","sb_available":"#2b212b"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"allow_switch_to_ada":0,"predefined":[]}});</script> */}

            </Helmet>
        </div>
    );
}

export default BookingWidget;