import { useState } from 'react';
import DescriptionTab from './description';
import { CurrentTab } from './enum';
import OverviewTab from './overview-tab';
import { Product } from '../../types/product';

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

function Tabs({product}: TabsProps): JSX.Element {
  const [currentTab, setCurrentTab] = useState(CurrentTab.Description);

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        {
          TABS.map(({ name, title }) => (
            <button
              className={`tabs__control ${currentTab === name ? activeClass : ''}`}
              type="button" onClick={() => {
                setCurrentTab(name);
              }}
              key={name}
            >
              {title}
            </button>
          ))
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
