import React from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      const {activeItem = null} = props;
      this.state = {
        activeItem
      };
    }

    render() {
      const {activeItem} = this.state;
      const {handleSetActiveItem} = this.props;
      return <Component
        {...this.props}
        activeItem={activeItem}
        setActiveItem={(item) => {
          handleSetActiveItem(item);
          this.setState({
            activeItem: item
          });
        }}
      />;
    }

    componentDidUpdate(prevProps) {
      if (this.props.activeItem !== prevProps.activeItem) {
        this.setState({
          activeItem: this.props.activeItem
        });
      }
    }
  }

  WithActiveItem.propTypes = {
    activeItem: PropTypes.any,
    handleSetActiveItem: PropTypes.func.isRequired
  };

  return WithActiveItem;
};

export default withActiveItem;
