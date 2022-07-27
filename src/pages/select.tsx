import cn from 'classnames';
import { Image } from '@/components/ui/image';
import Select from 'react-select';
import { useState } from 'react';
import { selectStyles } from '@/components/ui/select/select.styles';
import MainBannerImage from '../assets/grocery.webp';
import { useRouter } from 'next/router';

interface BannerProps {
  layout?: string;
}

const BannerWithSearch: React.FC<BannerProps> = ({ layout }) => {
  const router = useRouter();
  const [value, setValue] = useState(null);

  const options: any[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleChange = (selectedOption: any) => {
    console.log(`Option selected:`, selectedOption);
    setValue(selectedOption);
  };

  const handleNavigationHomePage = () => {
    router.push('/');
  };

  return (
    <div>
      <div className="-z-1 overflow-hidden">
        <div className="relative">
          <div className={cn('relative h-screen w-full')}>
            <Image
              className="h-full min-h-140 w-full"
              src={MainBannerImage}
              alt={''}
              layout="fill"
              objectFit="cover"
            />
            <div
              className={cn(
                'absolute inset-0 mt-8 flex w-full flex-col items-center justify-center py-5 text-center md:py-20 lg:space-y-10'
              )}
            >
              <h1
                className={cn(
                  'text-2xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl'
                )}
              >
                Groceries Delivered in 90 Minute
              </h1>
              <p className="text-sm text-heading lg:text-base xl:text-lg">
                Get your healthy foods & snacks delivered at your doorsteps all
                day everyday
              </p>
              <div className="flex w-full max-w-3xl items-center justify-center">
                <Select
                  options={options}
                  onChange={handleChange}
                  styles={selectStyles}
                  className="mx-2 w-full"
                  placeholder="Select city"
                />
                <Select
                  placeholder="Select districts"
                  options={options}
                  onChange={handleChange}
                  styles={selectStyles}
                  className="mx-2 w-full"
                />
                <Select
                  options={options}
                  placeholder="Select markets"
                  onChange={handleChange}
                  styles={selectStyles}
                  className="mx-2 w-full"
                />
                <button
                  onClick={handleNavigationHomePage}
                  className="ml-2px-2 flex h-full min-w-[150px] items-center justify-center rounded-lg bg-accent font-semibold text-light transition-colors duration-200 hover:bg-accent-hover focus:bg-accent-hover focus:outline-none"
                >
                  Go to Market
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWithSearch;
