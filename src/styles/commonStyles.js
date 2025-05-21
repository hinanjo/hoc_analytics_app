import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.lightBackground,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    color: COLORS.primary,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.lightText,
    marginBottom: 20,
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  legendContainer: {
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: COLORS.text,
  },
  periodSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
    width: '100%',
  },
  periodButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  activePeriodButton: {
    backgroundColor: COLORS.primary,
  },
  periodButtonText: {
    fontSize: 12,
    color: COLORS.lightText,
  },
  activePeriodButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: COLORS.primary,
  },
  screenSubtitle: {
    fontSize: 16,
    color: COLORS.lightText,
    marginBottom: 10,
  },
  listContainer: {
    padding: 10,
  },
  eventCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    flex: 1,
  },
  eventTypeContainer: {
    backgroundColor: '#eaeaea',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  eventType: {
    fontSize: 12,
    color: COLORS.lightText,
  },
  eventDetails: {
    marginBottom: 10,
  },
  eventDate: {
    fontSize: 14,
    color: '#555',
  },
  eventLocation: {
    fontSize: 14,
    color: '#555',
  },
  eventWinner: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.text,
  },
  eventTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  cardTag: {
    backgroundColor: '#e6f8f9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
    marginBottom: 6,
  },
  cardTagText: {
    fontSize: 12,
    color: COLORS.primary,
  },
  eventIndicators: {
    flexDirection: 'row',
  },
  indicator: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
  },
  holomenIndicator: {
    backgroundColor: '#ffe6f0',
  },
  indicatorText: {
    fontSize: 10,
    color: COLORS.lightText,
  },
  // モーダルスタイル
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: '90%',
    maxHeight: '80%',
    padding: 20,
  },
  modalScrollContent: {
    paddingBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalSection: {
    marginBottom: 20,
  },
  modalSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  modalDetail: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  modalLabel: {
    width: 80,
    fontSize: 14,
    color: COLORS.lightText,
  },
  modalValue: {
    flex: 1,
    fontSize: 14,
    color: COLORS.text,
  },
  modalCardTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  modalCardTag: {
    backgroundColor: '#e6f8f9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
    marginBottom: 6,
  },
  modalCardTagText: {
    fontSize: 12,
    color: COLORS.primary,
  },
  modalIndicators: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  modalIndicator: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  modalHolomenIndicator: {
    backgroundColor: '#ffe6f0',
  },
  modalDisabledIndicator: {
    backgroundColor: '#f5f5f5',
  },
  modalIndicatorText: {
    fontSize: 12,
    color: COLORS.lightText,
  },
  modalDisabledIndicatorText: {
    fontSize: 12,
    color: '#999',
  },
  closeButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // 検索とフィルター
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    marginRight: 10,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
    color: COLORS.lightText,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.text,
    padding: 0,
  },
  clearButton: {
    padding: 5,
  },
  clearButtonText: {
    color: '#999',
    fontSize: 14,
  },
  filterButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  filterButtonText: {
    fontSize: 12,
    color: COLORS.lightText,
  },
  // アクティブフィルター表示
  activeFiltersContainer: {
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  activeFiltersTitle: {
    fontSize: 12,
    color: COLORS.lightText,
    marginBottom: 5,
  },
  activeFiltersList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  activeFilterTag: {
    backgroundColor: '#e6f8f9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 5,
  },
  activeFilterText: {
    fontSize: 12,
    color: COLORS.primary,
  },
  clearFiltersButton: {
    backgroundColor: '#ffeeee',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginBottom: 5,
  },
  clearFiltersText: {
    fontSize: 12,
    color: COLORS.red,
  },
  resultsCountContainer: {
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  resultsCount: {
    fontSize: 12,
    color: COLORS.lightText,
  },
  exstreamerType: {
    backgroundColor: '#ffe6f0',
  },
  shopType: {
    backgroundColor: '#e6f8f9',
  },
  eventOrganizer: {
    fontSize: 14,
    color: '#555',
  },
  modalLinkValue: {
    flex: 1,
    fontSize: 14,
    color: COLORS.primary,
    textDecorationLine: 'underline',
  },
  noDataText: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  noResultsText: {
    fontSize: 16,
    color: '#999',
    marginBottom: 15,
  },
  resetButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 14,
  },
  filterOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  filterOption: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  activeFilterOption: {
    backgroundColor: COLORS.primary,
  },
  filterOptionText: {
    fontSize: 12,
    color: COLORS.lightText,
  },
  activeFilterOptionText: {
    color: 'white',
  },
  checkboxContainer: {
    marginVertical: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  checkboxLabel: {
    fontSize: 14,
    color: COLORS.text,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  cancelButtonText: {
    color: COLORS.lightText,
    fontSize: 16,
  },
  applyButton: {
    backgroundColor: COLORS.primary,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});