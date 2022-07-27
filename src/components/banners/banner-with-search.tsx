import cn from 'classnames';
import { Waypoint } from 'react-waypoint';
import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';
import { Image } from '@/components/ui/image';
// import { Banner } from '@/types/index';
import { productPlaceholder } from '@/lib/placeholders';
// import Search from '@/components/ui/search/search';
import { useAtom } from 'jotai';
import { displayHeaderSearchAtom } from '@/store/display-header-search-atom';
import { useState } from 'react';
import Select from '../ui/select/select';
import { selectStyles } from '../ui/select/select.styles';
import { Banner } from '@/types';

interface BannerProps {
  banners: Banner[] | undefined;
  layout?: string;
  callbackVisible: (isVisible: boolean) => void;
}

const BannerWithSearch: React.FC<BannerProps> = ({
  banners,
  layout,
  callbackVisible,
}) => {
  const [_, setDisplayHeaderSearch] = useAtom(displayHeaderSearchAtom);

  const [value, setValue] = useState(null);

  const onWaypointPositionChange = ({
    currentPosition,
  }: Waypoint.CallbackArgs) => {
    if (!currentPosition || currentPosition === 'above') {
      setDisplayHeaderSearch(true);
    }
  };

  const options: any[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleChange = (selectedOption: any) => {
    console.log(`Option selected:`, selectedOption);
    setValue(selectedOption);
  };

  return (
    <div
      className={cn('relative lg:block', {
        '!block': layout === 'minimal',
      })}
    >
      <div className="-z-1 overflow-hidden">
        <div className="relative">
          <Swiper
            id="banner"
            loop={true}
            modules={[Navigation]}
            resizeObserver={true}
            allowTouchMove={false}
            slidesPerView={1}
          >
            {banners?.map((banner, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={cn('relative h-screen w-full', {
                    // 'h-90vh': layout === 'minimal',
                    // 'max-h-140': layout === 'standard',
                    // 'max-h-[320px] md:max-h-[680px]': layout === 'minimal',
                  })}
                >
                  <Image
                    className="h-full min-h-140 w-full"
                    src={banner.image?.original ?? productPlaceholder}
                    alt={banner.title ?? ''}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div
                    className={cn(
                      'absolute inset-0 mt-8 flex w-full flex-col items-center justify-center space-y-10 py-5 py-20 text-center',
                      {
                        'space-y-5 md:!space-y-8': layout === 'minimal',
                      }
                    )}
                  >
                    <h1
                      className={cn(
                        'text-4xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl',
                        {
                          '!text-accent': layout === 'minimal',
                        }
                      )}
                    >
                      {banner?.title}
                    </h1>
                    <p className="text-base text-heading lg:text-base xl:text-lg">
                      {banner?.description}
                    </p>
                    <div
                      className={cn(
                        'flex w-full max-w-4xl flex-col items-center justify-center md:flex-col lg:flex-row'
                      )}
                    >
                      {/* <Search label="search" /> */}
                      <Select
                        options={options}
                        onChange={handleChange}
                        styles={selectStyles}
                        className="mx-2 my-1 w-full"
                        placeholder="Select city"
                        id="city"
                      />
                      <Select
                        placeholder="Select districts"
                        options={options}
                        onChange={handleChange}
                        styles={selectStyles}
                        className="mx-2 my-1 w-full"
                        id="districts"
                      />
                      <Select
                        options={options}
                        placeholder="Select markets"
                        onChange={handleChange}
                        styles={selectStyles}
                        className="mx-2 my-1 w-full"
                        id="markets"
                      />
                      <button
                        onClick={() => callbackVisible(true)}
                        className="mx-2 my-1 flex min-w-[180px]  items-center justify-center rounded-lg bg-accent py-3 font-semibold text-light transition-colors duration-200 hover:bg-accent-hover focus:bg-accent-hover focus:outline-none"
                      >
                        Go to Market
                      </button>
                    </div>
                    <Waypoint
                      onLeave={() => setDisplayHeaderSearch(true)}
                      onEnter={() => setDisplayHeaderSearch(false)}
                      onPositionChange={onWaypointPositionChange}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BannerWithSearch;
