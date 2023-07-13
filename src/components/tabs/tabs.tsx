import { useState } from 'react';
import DescriptionTab from './description';
import { CurrentTab } from './enum';
import OverviewTab from './overview-tab';
import { Product } from '../../types/product';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

type TabsProps = {
  product: Product;
}
const activeClass = 'is-active';
const TABS = [
  {
    name: CurrentTab.Overview,
    title: 'Характеристики',
    element: OverviewTab
  },
  {
    name: CurrentTab.Description,
    title: 'Описание',
    element: DescriptionTab
  },
];

const POSSIBLE_TABS = TABS.map(({name}) => name.toLowerCase());

function Tabs({product}: TabsProps): JSX.Element {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState(
    POSSIBLE_TABS.includes(searchParams.get('tab') || '') ? searchParams.get('tab') : CurrentTab.Description
  );

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        {
          TABS.map(({ name, title }) => {
            const newSearchParams = new URLSearchParams();
            newSearchParams.set('tab', name.toLowerCase());
            const { pathname } = location;
            const updatedURL = `${pathname}?${newSearchParams.toString()}`;

            return (
              <Link
                className={`tabs__control ${currentTab === name ? activeClass : ''}`}
                to={updatedURL}
                type="button" onClick={() => {
                  setCurrentTab(name);
                }}
                key={name}
              >
                {title}
              </Link>
            );
          })
        }
      </div>

      <div className="tabs__content">
        <div className={`tabs__element ${currentTab === CurrentTab.Overview ? activeClass : ''}`}>
          <OverviewTab product={product} />
        </div>
        <div className={`tabs__element ${currentTab === CurrentTab.Description ? activeClass : ''}`}>
          <DescriptionTab descriptionText={product.description} />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
