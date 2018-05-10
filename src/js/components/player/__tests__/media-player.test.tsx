//declare var jest, describe, it, expect;
import * as React from 'react';

import { mount, shallow } from 'enzyme';
import MediaPlayer from '@src/components/player/media-player';

describe('Media player component', () => {
    it('should render with "video" tag', () => {
        const wrapper = shallow(<MediaPlayer />);
        console.log('wrapper', wrapper);
        //expect(wrapper.type()).toBe('video');
    });

    /*
    it('should set properties', () => {
        const wrapper = shallow(<MediaPlayer loop={true} />);
        expect(wrapper.props().loop).toEqual(true);
    });*/

    /*
    it('should set videos sources', () => {
        const wrapper = shallow(
            <BasicVideoPlayer>
                <source src="http://localhost/videos/test_video.webm" type="video/webm; vp9" />
                <source src="http://localhost/videos/test_video.mp4" type="video/mp4" />
            </BasicVideoPlayer>
        );
        expect(wrapper.children().length).toEqual(2);
        expect(
            wrapper
                .find('source')
                .first()
                .props().src
        ).toEqual('http://localhost/videos/test_video.webm');
    });

    it('should call events', () => {
        const spyFn = jest.fn();
        const wrapper = shallow(<BasicVideoPlayer onCanPlay={spyFn} />);
        wrapper.find('video').simulate('canPlay');
        expect(spyFn).toHaveBeenCalled();
    });
    */
});
